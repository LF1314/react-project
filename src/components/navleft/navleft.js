import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { Menu} from 'antd';
import './navleft.less'

const MenuItem = Menu.Item;
class Navleft extends Component {
    state = {  };

    render() {
        return (
            <div className='navwraperr'>
               <Menu
               theme='dark'
               mode="vertical"
               >
                 <MenuItem key="/首页"><Link to='/home/admin'>首页</Link></MenuItem>
                 <MenuItem key="2">第二页</MenuItem>
               </Menu>
            </div>
        );
    }
}

export default Navleft;