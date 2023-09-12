import React from "react";
import { Link, useHistory} from "react-router-dom";
import { useState } from "react";

// would like to add functionality to create an account to route to new page

export const Login = () => {
    return (
        // <>Login</>
          <form>
            <label for= "email">email</label>
            <input type="email" placeholder="youremy@gmail.com" />
            <label for= "password">password</label>
            <input type="password" placeholder="***************" id="password" name="password" />
          </form>
    )
}

// export default function Login({updateUser}) {
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [signup, setSignup] = useState(false)
//     const history = useHistory()
 
//     function handleUsername(e){
//         setUsername(e.target.value)
//     }

//     function handlePassword(e){
//         setPassword(e.target.value)
//     }

//     function handleClick(){
//         setSignup(!signup)
//     }

//     function handleSubmit(e){
//         e.preventDefault()
//         fetch(signup?"/api/users":"/api/login", {
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//                 body: JSON.stringify({username: username, password: password})
//         })
//         .then( res=> {
//         if(res.ok){
//             res.json().then(user => {
//                 console.log(user)
//                 updateUser(user)
//                 history.push('/')
//             })
//         }
//         })
//     }

  // [function handleLogout(e){
  //   e.preventDefault()
  //   fetch("/api/logout", {
  //     method: "DELETE",
  //     headers: {"Content-Type": "application/json"},
  //   })
  //   .then(setUser(null))
  // }]
  
  // return (
  //   <>
  //     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  //       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          // {/* [/* <img
          //   className="mx-auto h-10 w-auto"
          //   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          //   alt="Your Company"
          // /> */}
        //   <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        //     Sign in to your account
        //   </h2>
        // </div>

        // <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        //   <form onSubmit={handleSubmit}
        //   className="space-y-6" action="#" method="POST">
            
            
        //     <div> {/* ======== username ========= */}
        //       <label className="block text-sm font-medium leading-6 text-gray-900">
        //         Username
        //       </label>
        //       <div className="mt-2">
        //         <input
        //           id="username"
        //           name="username"
        //           type="text"
        //           value={username}
        //           onChange={handleUsername}
        //           autoComplete="username"
        //           required
        //           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
        //         />
        //       </div>
        //     </div> {/* ======== username ========= */}

            // {/* ========== email validation ==========*/}
            // {/* <div>
            //   <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            //     Email address
            //   </label>
            //   <div className="mt-2">
            //     <input
            //       id="email"
            //       name="email"
            //       type="email"
            //       autoComplete="email"
            //       required
            //       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
            //     />
            //   </div>
            // </div> */}
            // {/* ========== email validation ==========*/}

            // <div> {/* ============ password ===========*/}
            //     <div className="flex items-center justify-between">
            //         <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            //         Password
            //         </label>

            //         <div className="text-sm">
            //             <a href="#" className="font-semibold text-pink-600 hover:text-pink-500">
            //             Forgot password?
            //             </a>
            //         </div>
            //     </div>
                
            //     <div className="mt-2">
            //         <input
            //             id="password"
            //             name="password"
            //             type="text"
            //             value ={password}
            //             onChange={handlePassword}
            //             autoComplete="current-password"
            //             required
            //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
            //         />
            //     </div>
            // </div> {/* ============ password ===========*/}

            
            // <div>{/* =========== sign-in button =========== */}
            //     <button
            //         type="submit"
            //         className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
            //         Sign in
            //     </button>
            //   <button onClick={handleClick}>{signup?"Register":"Login"}</button>
            // </div> {/* =========== sign-in button =========== */}

            // {/* =========== logout button ========== */}
            // {/* <div> 
            //   <button
            //     type="submit"
            //     onClick={handleLogout}
            //     className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            //   >
            //     Sign out
            //   </button>
            // </div> */}
            // {/* =========== logout button ========== */}

//           </form>

//         </div>
//       </div>
//     </>
//   )
// }