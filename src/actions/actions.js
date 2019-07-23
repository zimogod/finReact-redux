import * as types from '../action-types/action-types';
// actionCreator
export let add_num = (num)=>({
    type:types.ADD_NUM,
    num
})
export let reduce_num = (num)=>({
    type:types.REDUCE_NUM,
    num
})

// 异步action
export let reduce_numAsync = (num)=>{
   return dispatch=>{
       setTimeout(()=>{
        dispatch(reduce_num(num));
       },2000)
   }
}
// action
// export let reduce_num = num =>{
//     return {
//         type:types.REDUCE_NUM,
//         num:num
//     }
// }









