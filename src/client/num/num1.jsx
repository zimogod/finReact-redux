import React,{ Component } from 'react';

class Num1 extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div> 
            Num1组件  params为：{this.props.match.params.id}
      </div>
    )
  }
}

export default Num1;
