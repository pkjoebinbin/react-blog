import React, { Component } from 'react'
import styled from 'styled-components'
import logoUrl from '../../assets/images/logo.svg'

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
  
  .logo-module {
    background: #f50;
    width:180px;
    display:flex;
    justify-content:center;
    cursor:pointer;

    .logo-img {
      display:block;
      width:85%;
    }
  }
  
  .nav-list {
    width:100%;
    /* background:green; */
    display:flex;
    margin-left:20px;

    .nav-item {
      /* background:pink; */
      width:9%;
      text-align:center;
      color:#525252;
      font-size:15px;
      font-weight:400;
      cursor:pointer;
    }
  }
`

class HomeNav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      navList: [
        { title: '首页', url: '/home' },
        { title: '文章', url: '/home/archives' },
        { title: '工具', url: '' }
      ]
    }
  }

  componentDidMount = () => {

  }

  toHome = () => {
    let history = window.reactHistory
    history.push('/mainlayout/login')
  }

  shouldComponentUpdate = () => {

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
          <div className="logo-module" onClick={this.toHome}>
            <img src={logoUrl} className="logo-img" alt="logo"/>
          </div>

          <div className="nav-list">
            {
              this.state.navList.map((item, i) => {
                return <div className="nav-item" key={i} onClick={ () => {this.click(item.url)}}>{item.title}</div>
              })
            }
          </div>
        </header>
      </HomeNavStyle>
    )
  }
}

export default HomeNav
