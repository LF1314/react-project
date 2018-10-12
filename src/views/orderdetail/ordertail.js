import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './index.less'
import axios from '../../until/axios'
import Header from '../../components/header/header'
import starticon from './start_point.png'
import endicon from './end_point.png'
import { getdata } from '../../until/until'
import { Card ,Spin} from 'antd'

class Ordertail extends Component {
    state={
        orderdetail:{
            bike_sn:'4444',

        },
        showmesssage:true

    }
    componentWillMount(){
        let id = this.props.match.params.id
        axios.get('/order/detail',{id}).then(res=>{
            console.log(res)
            this.setState({
                orderdetail:res.result,
                showmesssage:false

            },()=>{
                console.log(this.state.orderdetail)
            })
           
         
        })
    }
    componentDidMount (){
        // console.log(this.props)
            let id = this.props.match.params.id
            axios.get('/order/detail',{id}).then(res=>{
               
                this.initMap(res.result)
            })
           } 
    //初始化一个地图
    initMap=(result)=>{
            const BMap = window.BMap
            this.map = new BMap.Map("allmap");
            // console.log(BMap.Map)
            const point = new BMap.Point(116.404, 39.915);  
            // console.log(map.centerAndZoom(point, 15))
             this.map.centerAndZoom(point, 15);  
             this.addcontrol()
             this.drawpolyline(result.position_list)
             //绘制多边形区域函数
             this.drawserverarea(result.area)
    }
    //添加控件是
    addcontrol=()=>{
        const ancho = {anchor:window.BMAP_ANCHOR_TOP_RIGHT}
        const BMap = window.BMap
        const map = this.map
        map.addControl(new BMap.NavigationControl(ancho));    
        map.addControl(new BMap.ScaleControl(ancho));  
    }
     
    //绘制折线图
    drawpolyline = (position_list)=>{
      //先绘制标注点
      let startpoint = position_list[0]
      let endpoint = position_list[position_list.length - 1]
      const BMap = window.BMap
      const map = this.map
      const  firstpoint =new BMap.Point(startpoint.lon,startpoint.lat)
      map.centerAndZoom(firstpoint, 10)
      const lastpoint = new BMap.Point(endpoint.lon,endpoint.lat)
      function makeMarker(point, png){
        return new BMap.Icon(png, new BMap.Size(36, 42), {    
            imageSize: new BMap.Size(36, 42),    
        }); 
    }
    let makerstrt = new BMap.Marker(firstpoint, {icon: makeMarker(firstpoint ,starticon)})    
    let makerend =new BMap.Marker(lastpoint, {icon: makeMarker(lastpoint ,endicon)})
    map.addOverlay(makerstrt)
    map.addOverlay(makerend)
     //绘制折线图
     //先把传过来的经纬度数组转化为point数组
     const pointslines = position_list.map(item=>{
         let points = new BMap.Point(item.lon,item.lat)
         return points
     })
     const polyline = new BMap.Polyline(
         pointslines,
        {
        strokeColor:"red", 
        strokeWeight:6, 
        strokeOpacity:0.6}
        );
        map.addOverlay(polyline)
    }
    //绘制服务区

    drawserverarea = (area)=>{
        const BMap = window.BMap
        const map = this.map
        const points = area.map(are=>{
            let areaitem = new BMap.Point(are.lon,are.lat)
            return areaitem
        })
        //绘制服务区域
        const playong = new BMap.Polygon(
            points,
            {
                strokeColor:'red',
                fillColor:'#333',
                fillOpacity:.5,
                strokeWeight:3

            }
        )
        map.addOverlay(playong)

    }

      
    render() {
        const data = this.state.orderdetail
        return (
            <div className='ordertail_wraper' >
                <Header>订单详情页</Header>
                {/* 地图接收容器 */}
                <div id='allmap'></div>

                <div className='order_othermessage'>
                    <Spin spinning={this.state.showmesssage}>
                         <div style={this.state.showmesssage ? {display:'none'} : {display:'block'}}>
                             <Card title = '订单详细信息'>
                                <ul className='order-item'>
                                    <li>
                                        <span>自行车编号：</span>
                                        <span>{data.bike_sn}</span>
                                    </li>
                                    <li>
                                        <span>结束地址：</span>
                                        <span>{data.end_location}</span>
                                    </li>
                                    <li>
                                        <span>手机号：</span>
                                        <span>
                                            {data.mobile}
                                        </span>
                                    </li>

                                    <li>
                                        <span>
                                            订单开始时间：
                                        </span>
                                        <span>
                                            {getdata(data.start_time)}
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            订单结束时间：
                                        </span>
                                        <span>
                                            {getdata(data.end_time)}
                                        </span>
                                    </li>
                                </ul>
                            </Card>
                            <Card title = '用户详细信息' style = {{marginTop:40}}>
                                    <ul className='order-item'>
                                        <li>
                                            <span>
                                               开始地址： 
                                            </span>
                                            <span>
                                                {data.start_location}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                用户名：
                                            </span>
                                            <span>
                                                {data.user_name}
                                            </span>
                                        </li>
                                    </ul>
                            </Card>
                         </div>
                    </Spin>
                </div>
            </div>
        );
    }
}

export default Ordertail;