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

// function DBCatSales() {
        
//   // console.log(visibleMonth)
//   const chartRef = useRef();
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [dataSet, setDataSet] = useState([]);
//   const [dataName, setDataName] = useState([]);
//   const [store, setStore] = useState([]);
//   const [sales, setSales] = useState([]);

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

//   useEffect(() => {
//     fetch('/api/categories')
//       .then((response) => response.json())
//       .then((data) => {
//         setCategories(data)
//         // console.log(data)
//       })
//       .catch((error) => {
//           console.error('Error fetching categories:', error);
//       });
          
//     fetch('/api/sale')
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log(data)
//         setSales(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching sales data:', error);
//       });
//   }, []);
  
//   const onClick = (event) => {
//     // console.log(getDatasetAtEvent(chartRef.current, event));
//   }

//       useEffect(() => {
//         setDataSet(categories?.map(singleSale => singleSale.categories))
//         setDataName(categories?.map(singleCategories => singleCategories.name))
//         // setDataSet(categories?.map(category => category.sales.map(singleCategory => singleCategory.sale))) 
//         console.log("look here", dataName)
//         console.log("look at Sales Data HERE", dataSet)
//       },[categories])
//       const labels = dataName
//       const data = {
//         labels,
//         datasets: [
//           {
//             label: 'Sales by Category',
//             data: dataSet,
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//           },
//         ],
//       };
      
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
      
// export default DBCatSales