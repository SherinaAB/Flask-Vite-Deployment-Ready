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
            <button>Log In</button>
          </form>
    )
}