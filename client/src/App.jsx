import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './components/postman/Login'
import Register from './components/postman/Register'
import About from './components/postman/About'
import Comment from './components/postman/Comment'

function App() {

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
    // <> SHERINA'S PHASE-5 PROJECT</>
    <Router>
    <NavBar />
    <Switch>
          <Route exact path="/">
            <Home 
            // products={products} history = {history} handleEdit={handleEdit}
            />
          </Route>
          <Route exact path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route exact path="/register">
            <Register newUser={newUser}/>
          </Route>
          <Route exact path="/comment">
            <Comment/>
          </Route>          
          <Route exact path="/about">
            <About/>
          </Route>

        </Switch>
    </Router>
    )
  }
  
  // if logged in, USER will see
  return (
    <Router>
      <div className="container">
        {/* <img src="/src/assets/PaperStyle.jpg" alt="picture of white paper waves"/>
        <div className='Customize the best data driven storytelling dasboards for your next business review!'>
          <h1>PERFORMANCE DASHBOARDS by Sherina Buenaseda</h1>
        </div>
        <header className='navbar'>  */}
        <NavBar />
        {/* </header> */}
        <Switch>

        {/*   HOME (LANDING) PAGE:  CHANGE TO LANDING PAGE W/ USER SIGN-ON OR CREATE USER W/ SAMPLE OF "CREATE YOUR OWN PREFERRED DASHBOARD VIEWS" */}
          <Route exact path="/">
            <Home products={products} handleEdit = {handleEdit}/>
          </Route>

          {/* WELCOME (TIMEFRAME) PAGE:  CHANGE TO SELECT MONTH TO VIEW/CREATE DASHBOARDS"
          <Route exact path="/welcome">
            <Welcome/>
          </Route>

        {/*   DASHBOARD LANDING PAGE (with filters (cats, prods, & stores)):  CHANGE TO DASHBOARD LANDING PAGE */}
          {/* <Route exact path="/dashboardLanding">
            <DashboardLanding/>
          </Route> */}

        {/*   PROFILE PREFERRED VIEWS PAGE:  CHANGE TO SAVED USER PROFILE PREFERRED VIEWS PAGE ===== SAVE TO PROFILE OPTION =====  */}
          {/* <Route exact path="/preferredView">
            <PreferredView/>
          </Route> */}

        {/*   COMMENTS PAGE:  CHAT, COMMENT, AND COMMUNICATE PAGE  */}
        {/* <Route exact path="/comments">
            <Comments/>
          </Route> */}

        {/*   ABOUT PAGE:  DEFINE WHAT DASHBOARDS ARE, THEIR PURPOSE, USAGE, ANALYSIS AND IMPORTANCE OF STORYTELLING W/ SAMPLE*/}
          {/* <Route exact path="/about">
            <About/>
          </Route> */}

        </Switch>
      </div>
    </Router>
  )
}

export default App