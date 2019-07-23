import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
class Income extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const { match } = this.props;
    console.log(match)
    return (
      <div>
          我是Income组件<br/>
          <Link to={`${match.url}/page1/456/剑哥哥`}>page1</Link><br/>
          <Link to="/income/page/page2">page2</Link>
          { this.props.children }
      </div>
    )
  }
}
export default Income;
