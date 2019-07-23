import React,{ Component } from 'react';
import { Route,Switch,Redirect,Link } from 'react-router-dom';

import Pay1 from './client/paycase/pay1';
import Pay2 from './client/paycase/pay2';

class Admin extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div> 
            <Link to="/pay1">pay1</Link><br/>
            <Link to="/pay2">pay2</Link>
            <Switch>
              <Route path="/pay1" component={Pay1} />
              <Route path="/pay2" component={Pay2} />
              <Redirect to="/pay1" />
            </Switch>
      </div>
    )
  }
}

export default Admin;
