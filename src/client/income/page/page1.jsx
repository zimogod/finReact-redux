import React,{ Component } from 'react';


class Page1 extends Component{
  constructor(props){
    super(props)
    console.log(props);
  }
  render(){
    const { match } = this.props;
    return (
      <div>
          我是Page1组件:income传递来的params数据为：{ match.params.id }---{match.params.name}
      </div>
    )
  }
}
export default Page1;
