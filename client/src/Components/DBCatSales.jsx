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

function DBCatSales() {
  // console.log(visibleMonth)
  const chartRef = useRef();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dataSet, setDataSet] = useState([]);
  const [dataName, setDataName] = useState([]);
  const [store, setStore] = useState([]);
  const [sale, setSale] = useState([]);

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
    fetch('/api/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
        // console.log(data)
      })
      .catch((error) => {
          console.error('Error fetching categories:', error);
      });
          
    fetch('/api/sale')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
      setSale(data)
      setDataSet(stores?.map(store => store.sales.map(singleSale => singleSale.sale_amount)))
        // const dataSet = [data];
        // let sum = 0;
        // dataSet.forEach(sale => {
        //   // console.log('forEach',store.sales)
        //   sale.forEach(singleCategory => {
        //     // console.log('forEach',singleSale)
        //       singleCategory.sales.forEach(sale =>
        //         // console.log('forEach',sale
        //         sum += singleSale.sale_amount)})
        // })
      })
      .catch((error) => {
        console.error('Error fetching sales data:', error);
      });
  }, []);
  
  const onClick = (event) => {
    // console.log(getDatasetAtEvent(chartRef.current, event));
  }
      useEffect(() => {
        // setDataSet(categories?.map(singleSale => singleSale.categories))
        // setDataSet(categories?.map(categories => categories.sales.map(singleCategories => singleCategories.sale_amount)))
        // setDataName(categories?.map(singleCategories => singleCategories.name))
        // setDataSet(sale?.map(category => category.sale_amount))
        // setDataSet(sale?.map(singleCategories=> singleCategories.sale_amount))
        
        
        // ***********************  THE ABOVE IS NOT CONNECTIG TO THE CATEGORY_ID ONLY; ONLY CATEGORY_ID TO SALES_ID ***********************
        
        
        // console.log("look here", dataName)
        console.log("Sales DataSet HERE", dataSet)
      },[categories])
      const labels = dataName
      const data = {
        labels,
        datasets: [
          {
            label: 'Sales by Category',
            data: dataSet,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

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
      
      
  return (
    <>
    {/* {dataSet.length > 0 ? <Bar
      ref={chartRef}
      options={options}
      data={data}
      onClick={onClick}
    /> :
    null } */}
    <Bar
      ref={chartRef}
      options={options}
      data={data}
      onClick={onClick}
    /> 
    </>
  );
}
      
export default DBCatSales