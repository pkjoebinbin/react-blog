import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
import routes from './router/routeConfig'
import { Provider } from 'react-redux'
import store from './store/index'
// import './index.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store= {store}>
          <BrowserRouter>
            <Switch>
            {
              routes.map((item, i) => {
                if (item.exact) {
                  return <Route exact path={item.path} key={i} render={props => (<item.component {...props} routes={item.subs}/>)}/>
                } else {
                  return <Route path={item.path} key={i} render={props => (<item.component {...props} routes={item.subs}/>)}/>
                }
              })
            }
            <Redirect exact from="/" to="/home"/>
            <Redirect from="*" to="/404"/>
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
