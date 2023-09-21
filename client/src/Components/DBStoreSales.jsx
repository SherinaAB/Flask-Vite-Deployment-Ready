import React from 'react'
import { useRef, useState, useEffect  } from 'react';
import { Bar, getDatasetAtEvent } from 'react-chartjs-2';

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

function DBStoreSales({}) {

  const chartRef = useRef();
  const [products, setProducts] = useState([]);
  const [dataSet, setDataSet] = useState([]);
  const [dataName, setDataName] = useState([]);
  const [stores, setStores] = useState([]);
  const [sales, setSales] = useState([]);
  const [salesByMonth, setSalesByMonth] = useState([]);

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
  
  useEffect(() => {
    fetch('/api/stores')
      .then((response) => response.json())
      .then((data) => {
        setStores(data)
      })
  },[])

  console.log(dataSet)
          

  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
  }

      useEffect(() => {
        setDataSet(stores?.map(store => store.sales?.map(singleStore => singleStore?.sale_amount))),
        setDataName(stores?.map((singleStore) => singleStore.name))
      },[stores])
      const labels = dataName
      let data = {
        labels,
        datasets: [
          {
            label: 'Stores by Store Name',
            data: dataSet,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },    
        ],
      };

  return (
    <>

    <Bar
      ref={chartRef}
      options={options}
      data={data}
      onClick={onClick}
    /> 
    </>
  );
}

export default DBStoreSales