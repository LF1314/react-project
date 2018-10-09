import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import notfind from './timg.gif'
import './index.less'
class Notfindpage extends Component {
    state = {  };

    render() {
        return (
            <div className='notfindwraper'>
    
                <div className='notfindimg'>
                    <img src={notfind}  alt=""/>
                </div>
            </div>
        );
    }
}

export default Notfindpage;