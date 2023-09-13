// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";

// export default function ProductCard({item}) {
//   // console.log(item)
//     const [itemImage,setItemImage] = useState(true);
//     const [itemName,setItemName] = useState(true);
//     const [itemDescription,setItemDescription] = useState(true);
//     const [itemSku,setItemSku] = useState(true);
//     const [itemPrice,setItemPrice] = useState(true);
//     const [itemStatus,setItemStatus] = useState(true);

//     const navigate = useNavigate()

//   return (
//     <div className='product-cards'>
//       {/* <div onClick={()=>setItemImg(!itemImg)}>{itemImg ? <img src={item.image} alt={item.name}></img> : null}</div> */}
//       <div> {item.image ? <img src={item.image} alt={item.name}></img> : null}</div>
//         <h2 onClick={() => navigate(`/category/${item.categoryId}`)}>{item.name}</h2>
//       <div> {itemName ? <h1>{item.name}</h1> : null}</div> 
//       <div> {itemDescription ? <p>{item.description}</p> : null}</div>
//       <div> {item.sku ? <h1>{item.sku}</h1> : null}</div>      
//       <div> {item.price ? <h4>Price: ${item.price}</h4> : ('')}</div>
//       <div> {item.status ? <h4>Inventory: {item.status}</h4> : null} </div>

//     </div>
//   )
// }