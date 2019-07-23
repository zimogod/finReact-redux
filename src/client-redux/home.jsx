// 只负责写redux组件的
import { connect } from 'react-redux';

import { add_num,reduce_num,reduce_numAsync } from '../actions/actions';

import Home from '../client/home-ui';

export default connect(
    state =>({num:state.reducer.num}),
    { add_num,reduce_num,reduce_numAsync }
)(Home);




