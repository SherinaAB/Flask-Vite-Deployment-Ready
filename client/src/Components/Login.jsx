import React from 'react'
import { Link, useHistory} from 'react-router-dom'
import { useState } from 'react'

// functionality to create an account to route to new page

function Login({updateUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);
  const history = useHistory();

  function handleUsername(e){
      setUsername(e.target.value)
  }

  function handlePassword(e){
      setPassword(e.target.value)
  }

  function handleClick(){
      setSignup(!signup)
  }

  function handleSubmit(e){
      e.preventDefault()
      fetch(signup?"/api/users":"/api/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
              body: JSON.stringify({username: username, password: password})
      })
      .then( res => {
        if(res.ok){
          res.json().then(user => {
              console.log(user)
              updateUser(user)
              history.push('/')
          })
      }
      })
  }

  function handleLogout(e){
      e.preventDefault()
      fetch("/api/logout", {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
      })
      .then(setUser(null))
  }

return (
  <>
    <div className="">
      <div className="">
        <h2 className="">
          Sign-in to your account
        </h2>
      </div>
      <div className="">
        <form onSubmit={handleSubmit}
        className="" action="#" method="POST">
{/* ======== username =========         */}
          <div> 
            <label className="">
              Username
            </label>
            <div className="">
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={handleUsername}
                autoComplete="username"
                required
                className=""
              />
            </div>
          </div> 
{/* ======== username ========= */}

{/* ========== email validation ==========*/}
          {/* <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}
{/* ========== email validation ==========*/}

{/* ============ password ===========*/}
          <div> 
              <div className="">
                  <label htmlFor="password" className="">
                    Password
                  </label>

                  <div className="">
                      <a href="#" className="">
                        Forgot Password?
                      </a>
                  </div>
              </div>
              
              <div className="">
                  <input
                      id="password"
                      name="password"
                      type="text"
                      value ={password}
                      onChange={handlePassword}
                      autoComplete="current-password"
                      required
                      className=""
                  />
              </div>
          </div> 
{/* ============ password ===========*/}

{/* =========== sign-in button =========== */}          
          <div>
              <button
                  type="submit"
                  className="">
                  Sign in
              </button>
            <button onClick={handleClick}>{signup?"Register":"Login"}</button>
          </div> 
{/* =========== sign-in button =========== */}

{/* =========== logout button ========== */}
          <div> 
            <button
              type="onClick"
              onClick={handleLogout}
              className=""
            >
              Sign out
            </button>
          </div>
{/* =========== logout button ========== */}
        </form>

      </div>
    </div>
  </>
)
}

export default Login;