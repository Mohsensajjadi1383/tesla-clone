import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Fragment } from 'react'
import Navbar from '../components/Navbar/Navbar'
import HomePage from '../components/HomePage/HomePage'
function MainRouter() {
    return (
         <Fragment>
              <Router>
                  <Navbar/>
                  <Switch>
                   
                      <Route path="/" exact>
                      <HomePage/>
                      </Route>
                      
                       
                  </Switch>
              </Router>

         </Fragment>

    )
}

export default MainRouter
