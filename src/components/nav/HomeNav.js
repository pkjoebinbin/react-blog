import React, { Component } from 'react'
import styled from 'styled-components'

const HomeNavStyle = styled.div `
  background:blue;
  width:100%;
  width-max:1200px;
  background:#fff;
  height:64px;
  line-height:64px;

  .header-center {
    width:100%;
    max-width:1200px;
    background:red;
    margin:0 auto;
  }
`

class HomeNav extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <HomeNavStyle>
        <header className="header-center">
          NAV
        </header>
      </HomeNavStyle>
    )
  }
}

export default HomeNav
