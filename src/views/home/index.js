import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Navleft from '../../components/navleft/navleft'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import {Row , Col} from 'antd'
import './index.less'
import {connect} from 'react-redux'
class Home extends Component {
    state = {  };
     componentWillMount(){
        console.log(this.props)
     }
    render() {
        return (
            <div >
                   <Row>
                       <Col span={4}>
                           <Navleft></Navleft>
                       </Col>
                       <Col span={20}>
                            <Header></Header>
                            <div className='breadcord'>
                               {this.props.menutext}
                            </div>
                            <div className='centerwraper'>
                            {this.props.children}
                            </div>
                       </Col>
                   </Row>
                 
                   <Footer></Footer>
            </div>
        );
    }
}


export default connect(
   (state)=>{
        return{
            menutext:state.menutext
        }
    }
)(Home);













