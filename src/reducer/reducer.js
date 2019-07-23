
import { combineReducers } from 'redux';
import * as types from '../action-types/action-types';
const initialState = {
    num:200
}
let reducer = (state = initialState,action) =>{
    switch(action.type){
        case types.ADD_NUM:
            return Object.assign({},state,{num:state.num + action.num});
        case types.REDUCE_NUM:
            return Object.assign({},state,{num:state.num - action.num});
        default:
            return state;
    }
}
let addreducer = (state = initialState,action) =>{
    switch(action.type){
        case types.ADD_NUM:
            return Object.assign({},state,{num:state.num + action.num});
        case types.REDUCE_NUM:
            return Object.assign({},state,{num:state.num - action.num});
        default:
            return state;
    }
}
// 合并reducer
const allReducer = combineReducers({
    reducer,
    addreducer
});
export default allReducer;
