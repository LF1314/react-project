import {createStore} from 'redux'

import  reducer from '../reducers/index'

const state= {
    menutext:'首页',
    // demo:'其他数据'
}
const store = createStore(reducer,state)

export default store