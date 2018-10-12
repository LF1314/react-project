import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './header.less'
import axios from 'axios'
import{ getdata } from '../../until/until'
class Header extends Component {

    state = {  
        time:'',
        weather:'',
        ishow:false
    };
    changetime=()=>{
        let data = new Date().getTime()
        this.setState({
            time: getdata(data)
        })
   
    }
   getweather=()=>{
       axios.get('http://t.weather.sojson.com/api/weather/city/101030100').then(res=>{
           console.log(res)
           let obj  =res.data.data.forecast[0]
           const wstr = `${obj.high}-${obj.low}-${obj.fx}-${obj.fl}`
           this.setState({
               weather:wstr
           })
       })
    
   }
   //判断用户是否进入了详情页面
    cahngepage=()=>{
        if(this.props.children){
            this.setState({
                ishow:true
            },()=>{
                console.log(this.state.ishow)
            })
        }
       
    }
    // 改变class属性
    chngeclass=()=>{
        if(this.state.ishow){
            return 'commeto_detail header-eraper'
        }else{
            return 'header-eraper'
        }
    }

   componentWillMount(){
       this.getweather()
       setInterval(()=>{
           this.changetime()
       },1000)
       this.cahngepage()
   }
    render() {
        return (
            <div className= {this.chngeclass()} >
                <div className='fl title'>
                    {this.props.children}
                </div>
                <div className=' clearfix'>
                       <div className='username fr'>
                             小强
                       </div>
                       <div className='othermessage fr'>
                             <span>{this.state.time}</span>
                             <span>{this.state.weather}</span>
                       </div>
                </div>
            </div>
        );
    }
}

export default Header;