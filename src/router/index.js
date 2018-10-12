import { HashRouter, Route,Switch} from 'react-router-dom'
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Home from '../views/home'
import Admin from '../views/admin'
import Order from '../views/order/order'
import Bar from  '../views/bargrap/bar'
import Pic from '../views/pic/pic'
import Ordertail from '../views/orderdetail/ordertail'
import Notfindpage from '../notfindpage/notfaindpage'
class Router extends Component {
    state = {  };

    render() {
        return (
            <HashRouter>
                <div>  
                   <Switch>
                   <Route path='/order/orderdatil/:id'  component ={Ordertail}></Route>
                   <Route path='/home' render={
                       ()=>
                       <Home>
                            <Switch>
                            <Route path='/home/admin' component={Admin}></Route>
                            <Route path='/home/order' component={ Order }></Route>
                            <Route path='/home/bar' component={Bar}></Route>
                            <Route path='/home/pic' component={Pic}></Route>
                            <Route component={ Notfindpage }></Route>
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