import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./navleft.less";
import * as actions from '../../redux/actions/menuactios'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
const { SubMenu } = Menu;

const MenuItem = Menu.Item;
class Navleft extends Component {
  state = {};
  componentWillMount(){
      console.log(
          this.props
      )
  }
  MenuItem = ({ item, key, keyPath }) => {
    console.log(key);
    this.props.changemenu(key)
  };
  render() {
    return (
      <div className="navwraperr">
        <Menu theme="dark" mode="vertical">
          <MenuItem key="首页" onClick={this.MenuItem}>
            <Link to="/home/admin">首页</Link>
          </MenuItem>
          <SubMenu title="订单管理">
            <MenuItem key="订单列表" onClick={this.MenuItem}>
              <Link to="/home/order">订单列表</Link>
            </MenuItem>
            <MenuItem key="订单详情">订单详情</MenuItem>
          </SubMenu>
          <SubMenu title="图例">
            <MenuItem key="条形图例" onClick={this.MenuItem}>
              <Link to="/home/bar">条形图例</Link>
            </MenuItem>
            <MenuItem key="圆形图" onClick={this.MenuItem}>
              <Link to="/home/pic">圆形图</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default connect(
    null,
    (dispatch)=>{
     return bindActionCreators(actions,dispatch)
    }
)(Navleft);
