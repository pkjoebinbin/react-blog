import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import { Route, Redirect, Switch } from 'react-router-dom'
import styled from 'styled-components'

const LocalStyle = styled.div `
  position:absolute;
  background:#f7f7f7;
  height:100%;
  width:100%;
  max-width:1920px;
  margin:0 auto;
  bottom:0;
  top:0;
  left:0;
  right:0;

`

class Mainlayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  node = () => {
    return (
      <h3>testsettest</h3>
    )
  }

  checkLogin = () => {
    if (this.state.a !== 2) {
      return Modal.info({
        title: '提示',
        closable: true,
      })
    }
  }

  componentWillMount () {
    console.log(this.props)
  }

  show = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render () {
    return (
      <LocalStyle>
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
      </LocalStyle>
    )
  }
}

export default Mainlayout