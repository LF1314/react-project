import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { Menu  } from 'antd';
import './navleft.less'
const { SubMenu } = Menu


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
                 <SubMenu title='订单管理'>
                   <MenuItem key="2"><Link to='/home/order'>订单列表</Link></MenuItem>
                   <MenuItem>订单详情</MenuItem>
                 </SubMenu>
                 <SubMenu title='图例'>
                  <MenuItem key='3'><Link to='/home/bar'>条形图例</Link></MenuItem>
                   <MenuItem><Link to='/home/pic'>圆形图</Link></MenuItem>
                 </SubMenu>
                
               </Menu>
            </div>
        );
    }
}

export default Navleft;