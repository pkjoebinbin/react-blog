import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
import routes from './router/routeConfig'
import { Provider } from 'react-redux'
import store from './store/index'
// import './index.less';
import styled from 'styled-components'

const AppStyle = styled.div `
  /* position:relative; */
`

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }


  componentDidMount = () => {

  }

  render() {
    return (
      <AppStyle>
        <Provider store= {store}>
          <BrowserRouter>
            <Switch>
            {
              routes.map((item, i) => {
                if (item.exact) {
                  return <Route exact path={item.path} key={i} render={props => (<item.component {...props} routes={item.routes}/>)}/>
                } else {
                  return <Route path={item.path} key={i} render={props => (<item.component {...props} routes={item.routes}/>)}/>
                }
              })
            }
            <Redirect exact from="/" to="/home"/>
            <Redirect exact from="*" to="/404"/>
            </Switch>
          </BrowserRouter>
        </Provider>
      </AppStyle>
    )
  }
}

export default App;
