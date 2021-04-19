import React, { useState, useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Axios from 'axios'

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/layout/Header'
import Home from './pages/Home'
import Protected from './pages/Protected'


import userContext from './context/userContext'

export default function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })


  useEffect(() => {
    const checkUserLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");

      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "https://optimistic-heisenberg-819a2a.netlify.app/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("https://optimistic-heisenberg-819a2a.netlify.app/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkUserLoggedIn();

  }, [])

  return (

    <Router>
      <div>
        <userContext.Provider value={{ userData, setUserData }}>
          <Header />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/protected" exact>
              <Protected />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
          </Switch>

        </userContext.Provider>
      </div>
    </Router>
  )
}
