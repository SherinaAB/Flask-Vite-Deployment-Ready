import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation';
import Login from './components/Login';
import About from './components/About';
import Comment from './components/Comment';

    function App() {

        const [user, setUser] = useState(null)

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

        if(!user){
            return (
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
            )
        }
    }
export default App;