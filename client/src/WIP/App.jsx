import { useState,useEffect } from 'react';
// import {BrowserRouter as Router, Switch, Routes, Route, useHistory} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import About from './components/About';

function App() {
  // //products state & fetch
  // const [products, setProducts] = useState([])
  // const [productId, setProductId] = useState()
  // const history = useHistory()

  // const updateProduct = (newProducts) => setProducts(products => products.map(product => product.id === newProducts.id? newProducts : product))
  // console.log(updateProduct)

  // function handleEdit(product, history){
  //   console.log(product)
  //   setProductId(product)
    
  // }
  // useEffect(() => {
  //   fetch('/api/products')
  //   .then(res => res.json())
  //   .then(data => setProducts(data))
  // }, [])

  // function addNewProduct(newProduct){
  //   setProducts([...products, newProduct])
  // }

  //user state & fetch
  const [user, setUser] = useState(null)
  function updateUser(new_user){
    setUser(new_user)
  }

  function fetchUsers(){
    fetch('/api/check_session')
    .then(res=> {
      if (res.ok){
        res.json()
        .then(data => setUser(data))
      }
      else{
        setUser(null)
      }
    })
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  //if not user, they will see
  if(!user){
    return (
    <>
    <Router>
    <NavBar />
    <Switch>
          <Route exact path="/">
            <Home products={products} history = {history} handleEdit={handleEdit}/>
          </Route>
          <Route exact path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route exact path="/register">
            <Register newUser={newUser}/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/comment">
            <Comment/>
          </Route>
        </Switch>
    </Router>
    </>
    )
  }
  
  // if logged in, USER will see
  return (
    <Router>
      <NavBar />

        <Switch>

        {/*   HOME (LANDING) PAGE:  CHANGE TO LANDING PAGE W/ USER SIGN-ON OR CREATE USER W/ SAMPLE OF "CREATE YOUR OWN PREFERRED DASHBOARD VIEWS" */}
          <Route exact path="/">
            <Home products={products} handleEdit = {handleEdit}/>
          </Route>

        {/*   WELCOME (TIMEFRAME) PAGE:  CHANGE TO SELECT MONTH TO VIEW/CREATE DASHBOARDS" */}
          <Route exact path="/welcome">
            <Welcome/>
          </Route>

        {/*   DASHBOARD LANDING PAGE (with filters (cats, prods, & stores)):  CHANGE TO DASHBOARD LANDING PAGE */}
          <Route exact path="/dashboardLanding">
            <DashboardLanding/>
          </Route>

        {/*   PROFILE PREFERRED VIEWS PAGE:  CHANGE TO SAVED USER PROFILE PREFERRED VIEWS PAGE ===== SAVE TO PROFILE OPTION =====  */}
          <Route exact path="/preferredView">
            <PreferredView/>
          </Route>

        {/*   COMMENTS PAGE:  CHAT, COMMENT, AND COMMUNICATE PAGE  */}
        <Route exact path="/comments">
            <Comments/>
          </Route>

        {/*   ABOUT PAGE:  DEFINE WHAT DASHBOARDS ARE, THEIR PURPOSE, USAGE, ANALYSIS AND IMPORTANCE OF STORYTELLING W/ SAMPLE*/}
          <Route exact path="/about">
            <About/>
          </Route>

        </Switch>
    </Router>
  )
}

export default App



// import AddNewItem from './components/pages/AddNewItem'
// import UpdateProduct from './components/pages/UpdateProducts'

  //products state & fetch
  // const [products, setProducts] = useState([])
  // const [productId, setProductId] = useState()
  // const history = useHistory()

  // const updateProduct = (newProducts) => setProducts(products => products.map(product => product.id === newProducts.id? newProducts : product))
  // console.log(updateProduct)

  // function handleEdit(product, history){
  //   console.log(product)
  //   setProductId(product)
    
  // }
  // useEffect(() => {
  //   fetch('/api/products')
  //   .then(res => res.json())
  //   .then(data => setProducts(data))
  // }, [])

  // function addNewProduct(newProduct){
  //   setProducts([...products, newProduct])
  // }
          // <Route exact path="/addnewitem">
          //   <AddNewItem addNewProduct={addNewProduct}/>
          // </Route>

          // <Route exact path="/updateproduct/edit/:id">
          //   <UpdateProduct updateProduct = {updateProduct} productId={productId}/>
          // </Route>