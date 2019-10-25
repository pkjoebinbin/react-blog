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
  box-shadow:0 0 30px rgba(0,0,0,0.15);

  .header-center {
    width:100%;
    max-width:1200px;
    min-width:1200px;
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
      width:6%;
      margin-right:20px;
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
        { title: '首页', url: '/home', name: 'home' },
        { title: '文章', url: '/home/archives', name: 'allList' },
        { title: '工具', url: '/home/archives', name: 'toolList' }
      ]
    }
  }

  componentDidMount = () => {

  }

  toHome = () => {
    let history = window.reactHistory
    history.push('/mainlayout')
  }

  click = (item) => {
    const { url, name } = item
    let history = window.reactHistory

    if (name !== 'home') {
      history.push(`${url}/${name}`)
    } else {
      history.push(url)
    }
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
                return <div className="nav-item" key={i} onClick={ () => {this.click(item)}}>{item.title}</div>
              })
            }
            <div className="nav-item">关于我</div>
          </div>
        </header>
      </HomeNavStyle>
    )
  }
}

export default HomeNav
