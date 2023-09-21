// import React from 'react'
// import { Link, useHistory} from 'react-router-dom'
// import { useState } from 'react'

// function Login({updateUser}) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [signup, setSignup] = useState(false);
//   const history = useHistory();

//   function handleUsername(e){
//       setUsername(e.target.value)
//   }

//   function handlePassword(e){
//       setPassword(e.target.value)
//   }

//   function handleClick(){
//       setSignup(!signup)
//   }

//   function handleSubmit(e){
//       e.preventDefault()
//       fetch(signup?"/api/login":"/api/users", {
//           method: "POST",
//           headers: {"Content-Type": "application/json"},
//               body: JSON.stringify({username: username, password: password})
//       })
//       .then( res => {
//         if(res.ok){
//           res.json().then(user => {
//               console.log(user)
//               updateUser(user)
//               history.push('/')
//           })
//       }
//       })
//   }

//   function handleLogout(e){
//       e.preventDefault()
//       fetch("/api/logout", {
//           method: "DELETE",
//           headers: {"Content-Type": "application/json"},
//       })
//       .then(setUser(null))
//   }

// return (
//   <>
//       <div id='LoginContainer'>
//         <div classname="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//               Sign-in to your account
//             </h2> 
//           </div>
//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form onSubmit={handleSubmit}
//             className="space-y-6" action="#" method="POST">
//     {/* ======== username =========         */}
//               <div> 
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Username
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="username"
//                     name="username"
//                     type="text"
//                     value={username}
//                     onChange={handleUsername}
//                     autoComplete="username"
//                     required
//                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div> 
//     {/* ======== username ========= */}

//     {/* ========== email validation ==========*/}
//               {/* <div>
//                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div> */}
//     {/* ========== email validation ==========*/}

//     {/* ============ password ===========*/}
//               <div> 
//                   <div className="flex items-center justify-between">
//                       <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                         Password
//                       </label>

//                       <div className="text-sm">
//                           <a href="#" className="font-semibold text-pink-600 hover:text-pink-500">
//                             Forgot Password?
//                           </a>
//                       </div>
//                   </div>
                  
//                   <div className="mt-2">
//                       <input
//                           id="password"
//                           name="password"
//                           type="text"
//                           value ={password}
//                           onChange={handlePassword}
//                           autoComplete="current-password"
//                           required
//                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
//                       />
//                   </div>
//               </div> 
//     {/* ============ password ===========*/}

//     {/* =========== sign-in button =========== */}          
//               <div>
//                   <button
//                       type="submit"
//                       >
//                       Sign in
//                   </button>
//                 <button onClick={handleClick}>{signup?"Register":"Login"}</button>
//               </div> 
//     {/* =========== sign-in button =========== */}

//     {/* =========== logout button ========== */}
//               <div> 
//                 <button
//                   type="onClick"
//                   onClick={handleLogout}
                  
//                 >
//                   Sign out
//                 </button>
//               </div>
//     {/* =========== logout button ========== */}
//             </form>

//           </div>
//         </div>
//       </div>
//   </>
// )
// }

// export default Login;

// className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
// className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"



// NOT USED FROM QUADRANT COMPONENT









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
  // console.log(visibleMonth)


// useEffect(()=>{
//   fetchMonth()

// },[])

// return (
//   <>
//   <div>
  {/* <MonthFilter month={month} selectedMonth={selectedMonth} onSelectedMonth={setSelectedMonth}/>
    <div>
      <button type="submit"> MonthFilter</button>
    </div>   */}
  {/*FIRST NAVBAR*/}

  {/* <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"> */}
        {/* <Nav className="me-auto">   */}
        {/* <Nav variant="tabs" defaultActiveKey="/dashboardlanding">
        <MonthFilter month={month} selectedMonth={selectedMonth} onSelectedMonth={setSelectedMonth}/>
          <Nav.Item>
            <Nav.Link href="/dbstoresales">All Stores All Categories</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbpricegap">Price Gap</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbpricegap">Product % Sales by Category</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbpricegap">Product Sales by Store</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbpricegap">Product Sales by Market</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbpricegap">Product Sales by Month</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbcatsales">Category Sales by Store</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbcatsales">Category Sales by Market</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbcategorysalesbymonth">Category Sales by Month</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbstoresalesbymonth">Store Sales by Month</Nav.Link>
          </Nav.Item>

        </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar> */}

  {/* LAYOUT*/}

  {/* <Container>
    <Row className="justify-content-md-left">
      <div>
        <h1> ROW 1</h1>
      </div>
      <Col md="auto">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/dashboardlanding">Select Chart to View</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* <Nav className="me-auto">   */}
              {/* <Nav variant="tabs" defaultActiveKey="/dashboardlanding">
                <Nav.Item>
                  <Nav.Link href="/dbstoresales">All Stores All Categories</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbpricegap">Price Gap</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbpricegap">Product % Sales by Category</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbpricegap">Product Sales by Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbpricegap">Product Sales by Market</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbpricegap">Product Sales by Month</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbcatsales">Category Sales by Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbcatsales">Category Sales by Market</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbcategorysalesbymonth">Category Sales by Month</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbstoresalesbymonth">Store Sales by Month</Nav.Link>
                </Nav.Item>
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
       
      </Col>

      <Col xs lg="2">
      <div>
        <h1> Column Right-Top</h1>
      </div>
      </Col>
    </Row>


    <Row className="justify-content-md-left">
      <div>
        <h1> ROW 1</h1>
      </div>
      <Col>
      <div>
        <h1> Column Left-Bottom</h1>
      </div>
      </Col>

      <Col md="auto">
      <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/dashboardlanding">Select Chart to View</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"> */}
              {/* <Nav className="me-auto">   */}
              {/* <Nav variant="tabs" defaultActiveKey="/dashboardlanding">
                <Nav.Item>
                  <Nav.Link href="/dbstoresales">All Stores All Categories</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbpricegap">Price Gap</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbpricegap">Product % Sales by Category</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbpricegap">Product Sales by Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbpricegap">Product Sales by Market</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbpricegap">Product Sales by Month</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbcatsales">Category Sales by Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbcatsales">Category Sales by Market</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbcategorysalesbymonth">Category Sales by Month</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dbstoresalesbymonth">Store Sales by Month</Nav.Link>
                </Nav.Item>
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        
      </Col>
      <div>
        <h1> ROW 2</h1>
      </div>
    </Row>
  </Container> */}

  {/*SECOND NAVBAR*/

  {/* <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">  
        <Nav variant="tabs" defaultActiveKey="/dashboardlanding">

          <Nav.Item>
            <Nav.Link href="/dbstoresales">All Stores All Categories</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbpricegap">Price Gap</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbpricegap">Product % Sales by Category</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbpricegap">Product Sales by Store</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbpricegap">Product Sales by Market</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbpricegap">Product Sales by Month</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbcatsales">Category Sales by Store</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbcatsales">Category Sales by Market</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbcategorysalesbymonth">Category Sales by Month</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/dbstoresalesbymonth">Store Sales by Month</Nav.Link>
          </Nav.Item>

        </Nav>
        </Navbar.Collapse>
    </Container>