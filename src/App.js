import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routesConfig from './router/routeConfig'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {renderRoutes(routesConfig)}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
