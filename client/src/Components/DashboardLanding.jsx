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

function DashboardLanding({}) {

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
  
    fetch('/api/stores')
      .then((response) => response.json())
      .then((data) => {useEffect(() => {  
        setStores(data)
        setDataSet(stores?.map(store => store.sales.map(singleSale => singleSale.sale_amount)))
          // const dataSet = [data];
          // let sum = 0;
          // dataSet.forEach(store => {
          //   // console.log('forEach',store.sales)
          //   store.forEach(singleSale => {
          //     // console.log('forEach',singleSale)
          //       singleSale.sales.forEach(sale =>
          //         // console.log('forEach',sale
          //         sum += sale.sale_amount)})
          // })
          //   console.log('store sales',sum)   
      })
          console.log('forEach',dataSet)
          // console.log('forEach data',data);
        // const sales = stores.map(store => store.sales)
        // setSalesByMonth(sales.filter(sale => sale.timeframe === visibleMonth))
        // const Totals = salesByMonth.reduce((partialSum,a) => partialSum + a,0)
        // setDataSet(Totals)
      // .catch((error) => {
      //   console.error('Error fetching store data:', error);
      // });

  });
  // console.log(dataSet)
  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
  }

      useEffect(() => {
        // setDataSet(stores?.map((singleStore) => singleStore.sales.sales_amount))
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

export default DashboardLanding


      //   [const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

      //   export const data = {
      //     labels,
      //     datasets: [
      //       {
      //         label: 'Dataset 1',
      //         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
      //       },
      //       {
      //         label: 'Dataset 2',
      //         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //         backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //       },
      //     ],
      //   };

      //   {
      //     id: 1,
      //     label: 'Product',
      //     data: dataSet,
      //   },
      
      //   backgroundColor: 'rgba(255, 99, 132, 0.5)'
      
      

      // =============================== WORKING CODE FOR DASHBOARD LANDING: =============================



      // function DashboardLanding({visibleMonth}) {
      //   // <div>Dashboard Landing Page</div>
      //   console.log(visibleMonth)
      //   const chartRef = useRef();
      //   const [products, setProducts] = useState([]);
      //   const [dataSet, setDataSet] = useState([]);
      //   const [dataName, setDataName] = useState([]);
      //   const [store, setStore] = useState([]);
      //   const [sales, setSales] = useState([]);
      // //   for (const product of products) {
      // //     console.log(`Product Name: ${product.name}`);
      // // // You can perform additional processing here
      // //   }
      
      //   const options = {
      //     responsive: true,
      //     plugins: {
      //       legend: {
      //         position: 'top',
      //       },
      //       title: {
      //         display: true,
      //         text: 'Chart.js Bar Chart',
      //       },
      //     },
      //   };
      
      //   // const labels = [products.price];
      
      //   useEffect(() => {
      //     fetch('/api/products')
      //       .then((response) => response.json())
      //       .then((data) => {
      //         setProducts(data)
      //         console.log(data)
      //       })
      //       .catch((error) => {
      //           console.error('Error fetching products:', error);
      //       });
        
      //     // fetch('/api/stores')
      //     //   .then((response) => response.json())
      //     //   .then((data) => {
      //     //     setStore(data);
      //     //     console.log(data)
      //     //   })
      //     //   .catch((error) => {
      //     //     console.error('Error fetching store data:', error);
      //     //   });
        
      //     fetch('/api/sale')
      //       .then((response) => response.json())
      //       .then((data) => {
      //         console.log(data)
      //         setSales(data);
      //       })
      //       .catch((error) => {
      //         console.error('Error fetching sales data:', error);
      //       });
      //   }, []);
        
      //   const onClick = (event) => {
      //     console.log(getDatasetAtEvent(chartRef.current, event));
      //   }
      
      //   useEffect(() => {
      //     setDataSet(products?.map((singleProduct) => singleProduct.price))
      //     setDataName(products?.map((singleProduct) => singleProduct.name))
      
      //   },[products])
      //   const labels = dataName
      //   const data = {
      //     labels,
      //     datasets: [
      //       {
      //         label: 'Price',
      //         data: dataSet,
      //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
      //       },
      //     ],
      //   };
      
      //   return (
      //     <>
      //     {/* {dataSet.length > 0 ? <Bar
      //       ref={chartRef}
      //       options={options}
      //       data={data}
      //       onClick={onClick}
      //     /> :
      //     null } */}
      //     <Bar
      //       ref={chartRef}
      //       options={options}
      //       data={data}
      //       onClick={onClick}
      //     /> 
      //     </>
      //   );
      // }
      
      // export default DashboardLanding