import { useState,useEffect } from 'react'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as styles from './App.css';
import Navigation from './components/Navigation';
import MonthFilter from './components/MonthFilter';
import Home from './components/Home';
import Login from './components/LoginNew';
import Signup from './components/Signup';
import DashboardLanding from './components/DashboardLanding';
import DBPriceGap from './components/DBPriceGap';
import DBCatSales from './components/DBCatSales';
import DBCategorySalesByMonth from './components/DBCategorySalesByMonth';
import DBStoreSalesByMonth from './components/DBStoreSalesByMonth';
import Quadrant from './components/Quadrant';
import Image from 'react-bootstrap/Image';
import About from './components/About';
import Comment from './components/Comment';

function App(props) {
  
  // const [month, setMonth] = useState([])
  
  // function fetchMonth() {
  //   fetch('/api/timeframes')
  //   .then(res=> {
  //     if (res.ok){
  //       res.json()
  //       .then(data => {
  //         // console.log(data)
  //         setMonth(data)})
  //     }
  //   })
  // }

  // const [selectedMonth, setSelectedMonth] = useState("All")
  // // console.log(selectedMonth)

  // const visibleMonth = month.filter(
  //   singleMonth => selectedMonth === "All" || singleMonth.timeframe === selectedMonth
  // )
  // // console.log(visibleMonth)

  const [user, setUser] = useState(null);
  const [currentForm, setCurrentForm] = useState('loginnew');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  function updateUser(new_user){
    setUser(new_user)
  }

  function fetchUsers(){
    fetch('/api/check_session')
    .then(res=> {
      if (res.ok){
        res.json()
        .then(data => {
          // console.log(data)
          setUser(data)})
      }
      else{
        setUser(null)
      }
    })
  }

  useEffect(()=>{
    // fetchMonth()
    fetchUsers()
  },[])

  //if not user, they will see
  if(!user){
    return (
    // <> SHERINA'S PHASE-5 PROJECT</>
    
    <Router>
      <div className='PageName'>
        <h1>PERFORMANCE DASHBOARDS </h1>
        <p>courtesy of: Devs by Sherina Lynn Buenaseda</p>

      </div>
        <div id="NavBar">
          <Navigation user={user} setUser={setUser}/>
        </div>
          {/* <div className='Form'>
            {
              currentForm === 'loginnew' ? <Login updateUser={updateUser} onFormSwitch={toggleForm}/> : <Signup updateUser={updateUser} onFormSwitch={toggleForm}/>
            }
          </div> */}
      <Switch>
          <Route exact path="/">
            <Home 
            // products={products} history = {history} handleEdit={handleEdit}
            />
          </Route>

          <Route exact path="/loginnew">
            <Login updateUser={updateUser}/>
          </Route>

          <Route exact path="/signup">
            <Signup updateUser={updateUser}/>
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
      <div id="container">
        {/* <img src="/src/assets/PaperStyle.jpg" alt="picture of white paper waves"/> */}
        <div className='PageName'>
          <h1>PERFORMANCE DASHBOARDS </h1>
          {/* <p className='courtesy'>courtesy of: Devs by Sherina Lynn Buenaseda</p> */}
        </div>
        <header className='navbar'>
        <Navigation user={user} setUser={setUser}/>
        </header>
        {/* <MonthFilter month={month} selectedMonth={selectedMonth} onSelectedMonth={setSelectedMonth}/> */}
          {/* <div>
              <button
                  type="submit"
                  >
                  MonthFilter
              </button>
            
          </div>  */}
        <Switch>

          <Route exact path="/">
            <Home 
            // products={products} handleEdit = {handleEdit}
            />
          </Route>

          <Route exact path="/dashboardLanding">
            <DashboardLanding />
          </Route>          
          
          <Route exact path="/quadrant">
            <Quadrant />
          </Route>

          <Route exact path="/dbstoresalesbymonth">
            <DBStoreSalesByMonth />
          </Route>

          <Route exact path="/dbpricegap">
            <DBPriceGap/>
          </Route>

          <Route exact path="/dbcatsales">
            <DBCatSales/>
          </Route>

          <Route exact path="/dbcategorybymonth">
            <DBCategorySalesByMonth/>
          </Route>

          <Route exact path="/dbcategorybymonth">
            <DBCategorySalesByMonth/>
          </Route>

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
// 'Customize the best data driven storytelling dasboards for your next business review!'