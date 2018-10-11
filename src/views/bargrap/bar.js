import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'
class Bar extends Component {
    state = {  };
    getOption=()=>{
        return{
            title:{
                text:'ufo订单数量',
               
            },
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'UNFO',
                    type:'bar',
                    barWidth: '60%',
                    data:[1000, 5200, 2000, 3340, 3900, 3300, 2200]
                }
            ]
        }
    }
    getOption2=()=>{
        return{
            title:{
                text:'订单数量',
               
            },
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            lenged:{
               data:['INFO','小黄车','滴滴']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
               
            ],

            series : [
                {
                    name:'INFO',
                    type:'bar',
                    barWidth: '10%',
                    data:[1000, 5200, 2000, 3340, 3900, 3300, 2200]
                }
                ,
                {
                    name:'小黄车',
                    type:'bar',
                    barWidth: '10%',
                    data:[10000, 5200, 2000, 3340, 3900, 3300, 9200]
                },
                {
                    name:'滴滴',
                    type:'bar',
                    barWidth: '10%',
                    data:[10000, 5200, 20000, 3340, 39000, 3300, 2200]
                }
            ]
        }
    }
    render() {
        return (
            
            <div>
             <Card title='条形图一'>
              <ReactEcharts
                option={this.getOption()}
                /> 
             </Card>
             <Card title='条形图二' style={{marginTop:20}}>
             <ReactEcharts
                option={this.getOption2()}
                /> 
             </Card>
            </div>
        );
    }
}

export default Bar ;