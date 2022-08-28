import React, { createContext,useReducer } from 'react';
import "./css/Proj.css"   
import 'bootstrap/dist/css/bootstrap.css';
import { Route,Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quiz from './components/Quiz';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import SciencePage from './components/SciencePage';
import CommercePage from './components/CommercePage';
import ArtsPage from './components/ArtsPage';

import { initialState,reducer } from '../src/reducer/useReducer';



// 1:contextAPI
export const UserContext = createContext();

const Routing = ()=>{
  return(<Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/quiz">
      <Quiz/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/signup">
      <SignUp/>
    </Route>
    <Route path="/logout">
      <Logout/>
    </Route>
   
    <Route path="/SciencePage">
      <SciencePage/>
    </Route>
    <Route path="/CommercePage">
      <CommercePage/>
    </Route>
    <Route path="/ArtsPage">
      <ArtsPage/>
    </Route>
      </Switch>)
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)



  return (

    
    <>
    <UserContext.Provider value={{state,dispatch}}>
      <Navbar/>
      <Routing/>
      
        </UserContext.Provider>
    </>
  )
}

export default App
