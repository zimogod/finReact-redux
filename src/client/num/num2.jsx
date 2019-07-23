import React,{ Component } from 'react';

class Num2 extends Component{
  constructor(props){
    super(props)
    console.log(props)
  }
  render(){
    const { location } = this.props;
    return (
      <div> 
            Num2组件<br />
            -------------
            query:{location.query.foo}----state为:{location.state.data}
      </div>
    )
  }
}

export default Num2;
