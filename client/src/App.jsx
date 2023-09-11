import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import { useState,useEffect } from 'react'
import './App.css'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import AddNewItem from './components/pages/AddNewItem'
import UpdateProduct from './components/pages/UpdateProducts'

function App() {
  //products state & fetch
  const [products, setProducts] = useState([])
  const [productId, setProductId] = useState()
  const history = useHistory()

  const updateProduct = (newProducts) => setProducts(products => products.map(product => product.id === newProducts.id? newProducts : product))
  console.log(updateProduct)

  function handleEdit(product, history){
    console.log(product)
    setProductId(product)
    
  }
  useEffect(() => {
    fetch('/api/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  function addNewProduct(newProduct){
    setProducts([...products, newProduct])
  }

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
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <About/>
          </Route>
          <Route exact path="/login">
            <Login updateUser={updateUser}/>
          </Route>
        </Switch>
    </Router>
    </>
    )
  }
  
  // if logged in, vendor will see
  return (
    <Router>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home products={products} handleEdit = {handleEdit}/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/addnewitem">
            <AddNewItem addNewProduct={addNewProduct}/>
          </Route>
          <Route exact path="/updateproduct/edit/:id">
            <UpdateProduct updateProduct = {updateProduct} productId={productId}/>
          </Route>
        </Switch>
    </Router>
  )
}

export default App
