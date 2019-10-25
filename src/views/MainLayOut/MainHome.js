import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu, Icon, Avatar  } from 'antd'
import logoUrl from '../../assets/images/logo.svg'

const { SubMenu } = Menu

const MainHomeStyle = styled.div `
  height:100%;
  display:flex;

  .logo {
    display:block;
    width:65%;
    margin:20px auto 30px;
    cursor: pointer;
  }

  .left-side {
    background:#001529;
    width:250px;
    height:100%;
  }

  .right-side {
    width:100%;
    overflow:auto;

    .header {
      width:100%;
      background:#fff;
      height:64px;
      display:flex;
      justify-content:flex-end;
      align-items:center;
      padding-right:30px;
    }
  }
`

const Content = styled.div `
  background:#fff;
  margin:30px;
  padding:20px;

`



class MainHome extends Component {
  constructor (props) {
    super(props)
    
    this.state = {

    }
  }

  toHome = () => {
    this.props.history.push('/')
  }

  render () {
    return (
      <MainHomeStyle>
        <div className="left-side">
          <img className="logo" src={logoUrl} alt="123123" onClick={this.toHome}/>
          <Menu
            theme="dark"
            // style={{ width: 256 }}
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            mode="inline"
          >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>文章管理</span>
              </span>
            }
          >

            <Menu.Item key="1">发布文章</Menu.Item>
            <Menu.Item key="2">文章查询</Menu.Item>
          </SubMenu>
        </Menu>
        </div>

        <div className="right-side">
          <header className="header">
            <Avatar size="large" icon="user"/>
          </header>

          <Content>
            123123123123
            12321 <br/>
            12321 <br/>
            12321 <br/>
            12321 <br/>
            12321 <br/>
            12321 <br/>
            12321 <br/>
            12321 <br/>
          </Content>
        </div>
      </MainHomeStyle>
    )
  }
}

export default MainHome