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

    this.state = {
      navList: [
        { title: '首页', url: '/home' },
        { title: '文章', url: '/home/archives' }
      ]
    }
  }

  componentDidMount = () => {

  }

  shouldComponentUpdate = () => {
    return false
  }

  click = (item) => {
    // console.log(window.reactHistory)
    let history = window.reactHistory
    history.push(item)
  }

  render () {
    return (
      <HomeNavStyle>
        <header className="header-center">
          <div className="logo">
            logo
          </div>

          {
            this.state.navList.map((item, i) => {
              return <div key={i} onClick={ () => {this.click(item.url)}}>{item.title}</div>
            })
          }
        </header>
      </HomeNavStyle>
    )
  }
}

export default HomeNav
