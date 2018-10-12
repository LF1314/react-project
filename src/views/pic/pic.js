import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'
import infographic   from '../../common/infographic'
import  echarts from 'echarts'
class Pic extends Component {
    state = { };

 
    componentWillMount(){
        echarts.registerTheme('mtthem', infographic)
    }
    picoption1=()=>{
       
          return {
            title : {
                text: '单车骑行量',
                x:'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data:['周一','周二','周三','周四','周五']
            },
            series: [
                {
                    name:'骑行量',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '18',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:3350, name:'周一'},
                        {value:3100, name:'周二'},
                        {value:2340, name:'周三'},
                        {value:1350, name:'周四'},
                        {value:5480, name:'周五'},
                        {value:1480, name:'周六'},
                        {value:1540, name:'周七'}
                    ]
                }
            ]
          }
    }

    picoption2=()=>{
        return{
            title : {
                text: '单车订单量',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            series : [
                {
                    name: '单车订单量',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:3350, name:'周一'},
                        {value:3100, name:'周二'},
                        {value:2340, name:'周三'},
                        {value:1350, name:'周四'},
                        {value:1578, name:'周五'},
                        {value:1048, name:'周六'},
                        {value:1548, name:'周日'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 5,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }
    render() {
        return (
            <div className='pic_wraper'>
                 <Card title='饼状图一'>
                     <ReactEcharts
                      option={this.picoption1()}
                      theme = 'mtthem'
                     >
                     </ReactEcharts>
                 </Card>

                 <Card title='饼状图二' style={{marginTop:20}}>
                        <ReactEcharts
                         option = {this.picoption2()}
                         theme = 'mtthem'
                        >
                        </ReactEcharts>
                 </Card>
            </div>
        );
    }
}

export default Pic;