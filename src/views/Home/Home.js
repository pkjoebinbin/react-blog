import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import HomeNav from '../../components/nav/HomeNav'
import styled from 'styled-components'
import bcImg from '../../assets/images/backgroundPicture.png'

 const MainStyle = styled.div `
  padding:100px 0 40px 0;
  background:#f7f7f7;
 `

 const MainCenter = styled.div `
  max-width:1200px;
  min-width:1200px;
  margin:0 auto;
 `

class Index extends Component {
  constructor (props) {
    super(props)
    window.reactHistory = this.props.history
    
  }

  componentDidMount = () => {

  }

  render () {
    return (
      <div>
        <HomeNav/>
        <MainStyle>
          <MainCenter>
            <Switch>
              {
                this.props.routes.map((item, i) => {
                  if (item.exact) {
                    return <Route exact path={item.path} key={i} render={props => (<item.component {...props} routes={item.routes}/>)}/>
                  } else {
                    return <Route path={item.path} key={i} render={props => (<item.component {...props} routes={item.routes}/>)}/>
                  }
                })
              }
              <Redirect exact from="*" to="/404"/>
            </Switch>
          </MainCenter>
        </MainStyle>

      </div>
    )
  }
}

export default Index