import React from 'react'
import { useRef, useState, useEffect  } from 'react';
import { Bar, getDatasetAtEvent } from 'react-chartjs-2';
// import Products from './postman/Products';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardLanding() {
  // <div>Dashboard Landing Page</div>
  const chartRef = useRef();
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState([]);
  const [sales, setSales] = useState([]);
//   for (const product of products) {
//     console.log(`Product Name: ${product.name}`);
// // You can perform additional processing here
//   }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  // const labels = [products.price];

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
          console.error('Error fetching products:', error);
      });
  
    fetch('/api/store')
      .then((response) => response.json())
      .then((data) => {
        setStore(data);
      })
      .catch((error) => {
        console.error('Error fetching store data:', error);
      });
  
    fetch('/api/sales')
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
      })
      .catch((error) => {
        console.error('Error fetching sales data:', error);
      });
  }, []);
  
  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
  }

  const data = {
    // labels,
    datasets: [
      {
        label: 'Price',
        data: products.map((total) => total.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

  return (
    <Bar
      ref={chartRef}
      options={options}
      data={data}
      onClick={onClick}
    />
  );
}

export default DashboardLanding