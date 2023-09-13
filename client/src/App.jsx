import { useState,useEffect } from 'react'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import DashboardLanding from './components/DashboardLanding';
import About from './components/About';
import Comment from './components/Comment';

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
      <div id="NavBar">
        <Navigation />
      </div>
    <Switch>
          <Route exact path="/">
            <Home 
            // products={products} history = {history} handleEdit={handleEdit}
            />
          </Route>

          {/* <Route exact path="/login">
            <Login />
          </Route> */}

          <Route exact path="/login">
            <Login updateUser={updateUser}/>
          </Route>

          <Route exact path="/dashboardlanding">
            <DashboardLanding />
          </Route>

          {/* <Route exact path="/login">
            <Login updateUser={updateUser}/>
          </Route> */}
          {/* <Route exact path="/register">
            <Register/>
          </Route> */}
          {/* <Route exact path="/register">
            <Register newUser={newUser}/>
          </Route> */}
          {/* <Route exact path="/comment">
            <Comment/>
          </Route>          
          <Route exact path="/about">
            <About/>
          </Route> */}

        </Switch>
    </Router>
    )
  }
  
  // if logged in, USER will see
  return (
    <Router>
      <div id="container">
        {/* <img src="/src/assets/PaperStyle.jpg" alt="picture of white paper waves"/> */}
        <div className='Customize the best data driven storytelling dasboards for your next business review!'>
          <h1>PERFORMANCE DASHBOARDS </h1>
          <p>courtesy of: Devs by Sherina Lynn Buenaseda</p>
        </div>
        <header className='navbar'>
        <Navigation />
        </header>
        <Switch>

          <Route exact path="/">
            <Home 
            // products={products} handleEdit = {handleEdit}
            />
          </Route>


          {/* // <Route exact path="/login">
          //   <Login/>
          // </Route> */}


          {/* <Route exact path="/dashboardLanding">
            <DashboardLanding/>
          </Route> */}


          {/* <Route exact path="/preferredView">
            <PreferredView/>
          </Route> */}


          <Route exact path="/comments">
            <Comment/>
          </Route>


          <Route exact path="/about">
            <About/>
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App     

// {/*   HOME (LANDING) PAGE:  CHANGE TO LANDING PAGE W/ USER SIGN-ON OR CREATE USER W/ SAMPLE OF "CREATE YOUR OWN PREFERRED DASHBOARD VIEWS" */}
// {/* WELCOME (LOGIN) PAGE:  CHANGE TO SELECT MONTH TO VIEW/CREATE DASHBOARDS" */}
// {/*   DASHBOARD LANDING PAGE (with filters (month, cats, prods, & stores)):  CHANGE TO DASHBOARD LANDING PAGE
// {/*   PROFILE PREFERRED VIEWS PAGE:  CHANGE TO SAVED USER PROFILE PREFERRED VIEWS PAGE ===== SAVE TO PROFILE OPTION =====  */}
// {/*   COMMENTS PAGE:  CHAT, COMMENT, AND COMMUNICATE PAGE  */}
// {/*   ABOUT PAGE:  DEFINE WHAT DASHBOARDS ARE, THEIR PURPOSE, USAGE, ANALYSIS AND IMPORTANCE OF STORYTELLING W/ SAMPLE*/}