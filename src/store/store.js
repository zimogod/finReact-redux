import { createStore,applyMiddleware } from 'redux';

import allReducer from '../reducer/reducer';

// 调试插件，可以在控制台进行调试 查看代码  一目了然  
import { composeWithDevTools } from 'redux-devtools-extension';

// 才是真正的中间件，可以进行异步操作
import thunk from 'redux-thunk';

// 打印日志的中间件
// import logger from 'redux-logger';

const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;