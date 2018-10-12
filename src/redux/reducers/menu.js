
const menutext =(state = '首页',action)=>{
    switch(action.type){
        case 'CHANGEMENUETEXT':
         return action.text
         
         default:
         return state
    }


}
export default menutext