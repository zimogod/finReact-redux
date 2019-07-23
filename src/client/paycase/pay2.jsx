import React,{ Component } from 'react';
import { Route,Switch,Redirect,Link } from 'react-router-dom';
import Num1 from '../num/num1';
import Num2 from '../num/num2';

class Pay2 extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const { match } = this.props;
    const a = { 
        pathname:"/pay2/num2", 
        hash:'#zimo',  
        query:{foo: 'zimogod', boo:'boo'},  
        state:{data:'hello'}   
    };
    return (
      <div> 
            pay2组件<br />
            <Link to={`${match.url}/num1/456`}>num1</Link><br/>
            <Link to={a}>num2</Link>
            <Switch>
              <Route path={`${match.url}/num1/:id`} component={Num1} />
              <Route path="/pay2/num2" component={Num2} />
              <Redirect to={`${match.url}/num1/456`} />
            </Switch>
      </div>
    )
  }
}

export default Pay2;
