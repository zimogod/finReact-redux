import React,{Component} from 'react';
import { BrowserRouter as Router,HashRouter,Route,Switch,Redirect } from 'react-router-dom';
import App from './App';
import Index from './client/index';
import Income from './client/income/income';

import Page1 from './client/income/page/page1';
import Page2 from './client/income/page/page2';

// arr.filter((item)=> item.id ==5);

class ERouter extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        const { match } = this.props;
        console.log(match)
        console.log
        return (           
       
                <App>
                    <Switch>
                        <Route path='/index'  component={Index} />
                        <Route path='/income' render={()=>
                            <Income>
                                <Switch>
                                    <Route path={`${match.url}/page1/:id/:name`} component={Page1} />
                                    <Route path='/income/page/page2' component={Page2} />
                                    <Redirect from="/" to="/income/page/page1" />
                                </Switch>
                            </Income>
                        } />
                        <Redirect from="/" to="/index" />
                    </Switch>
                </App>
            
        )
    }
}
export default ERouter;

