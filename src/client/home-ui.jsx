// 只负责写UI组件的
import React,{ Component } from 'react';
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
        arr:[],
        userName:'紫漠哥哥！',
    }
  }
  render(){
    const { num,add_num,reduce_num,reduce_numAsync } = this.props;
    console.log(this.props);
    return (
      <div> 
            home组件：{ this.state.userName }
            -----------------<br />
            <button onClick={()=>reduce_numAsync(5*1)}>异步减</button>
            <button onClick={()=>reduce_num(5*1)}>减</button>
              { num }
            <button onClick={()=>add_num(5*1)}>加</button>
      </div>
    )
  }
}
export default Home;
