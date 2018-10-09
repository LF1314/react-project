import { HashRouter, Route,Switch } from 'react-router-dom'
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Home from '../views/home'
import Admin from '../views/admin'
import Notfindpage from '../notfindpage/notfaindpage'
class Router extends Component {
    state = {  };

    render() {
        return (
            <HashRouter>
                <div>
                   <Switch>
                   <Route path='/home' render={
                       ()=>
                       <Home>
                            <Switch>
                            <Route path='/home/admin' component={Admin}></Route>
                            <Route component={Notfindpage}></Route>
                            </Switch>
                       </Home>
                   }>
                   </Route>
                    <Route component={Notfindpage}></Route>
                   </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default Router;