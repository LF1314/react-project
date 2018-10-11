import React, { Component } from "react";
import "./order.less";
import axios from '../../until/axios'
// import PropTypes from 'prop-types';
import { message ,Card, Form, Select, DatePicker, Button ,Table , Spin ,Modal } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;
// 日期选择框
const { RangePicker } = DatePicker;
const optoncity = [
  {
    label: "北京",
    value: 0
  },
  {
    label: "香港",
    value: 1
  },
  {
    label: "广东",
    value: 2
  }
];
const orderstatus = [
  {
    label: "已完成",
    value: 0
  },
  {
    label: "未完成",
    value: 1
  },
  {
    label: "正在进行",
    value: 2
  }
];
const columns=[
    {
        title: '订单编号',
        dataIndex:'order_sn',
        key: 'order-sn',
    },
    {
    title: '姓名',
    dataIndex: 'user_name',
    key: 'user-name',
  }, {
    title: '手机号',
    dataIndex: 'mobile',
    key: 'mobile',
  }, {
    title: '应付金额',
    dataIndex: 'total_fee',
    key: 'total_fee',
  },
  {
    title: '实付金额',
    dataIndex: 'user_pay',
    key: 'user_pay',
  }
]
var rederdata =[]
class Order extends Component {
  state = {
    loading:false,
    total:0,
    selectedrowsv:[],
    visible:false,
    enditem:{}
  }
  params = {
    pn:1,
}
    //获取订单列表
    getorderlist=()=>{
        this.setState({
            loading:true
        })
        axios.get('/order/list',this.params).then(res=>{
        //  console.log(res.result.total_count)
       rederdata  =res.result.item_list.map((item,index)=>{
        item.key = index;
        return item
         })
        this.setState({
            loading:false,
            total:res.result.total_count ,
           
        })
        })
    }
  componentWillMount(){
      this.getorderlist()
  }
  //获取表单数据
  handlesubmit = () => {
    const { form } = this.props;
    let val = form.getFieldsValue();
    console.log(val);
  };
  //重置表单数据
  resetmyform = () => {
    this.props.form.resetFields();
  };
  //结束订单函数
  getoverorder=()=>{
       if(!this.state.selectedrowsv[0])
       {
            message.info('您还没有选择用户！')
       }else{
           let id = this.state.selectedrowsv[0].id
           console.log(id)
           axios.get('/order/ebike_info',{id}).then(res=>{
               console.log(res)
            this.setState({
                enditem:res.result,
                visible:true
            })
           })
        
       }
  }
  //确定完成订单
  handelorder=()=>{
     axios.get('/order/finish_order').then(res=>{
         console.log(res)
         if(res.code == '0')
         {
             this.setState({
                 visible:false,
                 selectedrowsv:[]
             },()=>{
                message.success('结束订单成功')
               this.getorderlist()
             })
            
         }
     })
  }
  handleCancel=()=>{
    this.setState({
        visible: false,
      })  
}

  render() {
    const  pagination = {
        pageSize:10,
        total:this.state.total,
        onChange:(index)=>{
        this.params.pn = index
        this.getorderlist()
        }      
      }
    
      //用户选择复选框所触发的
      const rowselection={
          type:'radio',
          onChange:(selectedRowKeys, selectedRowsv)=>{
             console.log(selectedRowKeys,selectedRowsv)
             this.setState({
                selectedrowsv:selectedRowsv
             })
          }
      }
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card>
         <Form layout="inline">
            <FormItem label="城市">
              {getFieldDecorator("city")(
                <Select style={{ width: 150 }} placeholder="选择城市">
                  {optoncity.map(item => (
                    <Option value={item.value} key={item.value}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>
            <FormItem label="选择日期">
              {getFieldDecorator("date")(<RangePicker />)}
            </FormItem>
            <FormItem label="订单状态">
              {getFieldDecorator("statu")(
                <Select style={{ width: 150 }} placeholder="选择订单状态">
                  {orderstatus.map(item => (
                    <Option value={item.value} key={item.value}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>

            <div className="serachbtn">
              <Button type="primary" onClick={this.handlesubmit}>
                查询订单
              </Button>
              <Button className="ml20" onClick={this.resetmyform}>
                重置表单
              </Button>
            </div>
          </Form>
        </Card>
        <Card className='lokdetail' >
            <div>
                <Button type='primary'>订单详情</Button>
                <Button type='primary' className='ml20' onClick={this.getoverorder}>结束订单</Button>
            </div>
        </Card>
           <Spin spinning={this.state.loading}>
               <Table columns={columns} dataSource={rederdata} 
                pagination = {pagination}
                rowSelection ={rowselection}
               />
           </Spin>
           <Modal
           title='订单信息'
           visible={this.state.visible}
           onOk = {this.handelorder}
           onCancel={this.handleCancel}
           >
             <p className='modelitem'>自行车编号：{this.state.enditem.bike_sn}</p>
             <p className='modelitem'>电池电量：{this.state.enditem.battery}</p>
             <p className='modelitem'>用户定位：{this.state.enditem.location}</p>
             <p className='modelitem'>开始时间：{this.state.enditem.start_time}</p>
           </Modal>
      </div>
    );
  }
}

export default Form.create()(Order);
