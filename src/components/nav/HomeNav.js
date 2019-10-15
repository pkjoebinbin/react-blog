import React, { Component } from 'react'
import styled from 'styled-components'

const HomeNavStyle = styled.div `
  width:100%;
  height:60px;
  line-height:60px;
  position:fixed;
  top:0;
  z-index:9;
  background:#fff;
  border-bottom:1px solid #efefef;

  .header-center {
    width:100%;
    max-width:1200px;
    margin:0 auto;
    display:flex;
  }
  
  .logo {
    background: #ff6231;
    width:140px;
  }
  
  .nav-list {

    width:100%;
  }
`

class HomeNav extends Component {
  constructor (props) {
    super(props)
  }

  state = {
    navList: [
      '首页',
      '归档'
    ]
  }

  render () {
    return (
      <HomeNavStyle>
        <header className="header-center">
          <div className="logo">
            logo
          </div>

          <nav className="nav-list">12221</nav>
        </header>
      </HomeNavStyle>
    )
  }
}

export default HomeNav
