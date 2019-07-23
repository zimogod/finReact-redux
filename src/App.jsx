import React,{ Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import './App.css';
class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const { match } = this.props;
    return (
      <div className="App"> 
        <NavLink to="/index">index</NavLink><br/>
        <Link to="/income">income</Link>
        {/*默认显示容器，相当于vue中的router-view  */}
        { this.props.children }
      </div>
    )
  }
}

export default App;
