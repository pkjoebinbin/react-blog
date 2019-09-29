import React, { Component } from 'react'
import HomeNav from '../../components/nav/HomeNav'
import styled from 'styled-components'
import { Layout } from 'antd';

const { Content } = Layout;

const ContentStyle = styled.div `
  height:100%;
  width:100%;
  max-width:1200px;
  margin:0 auto;
  background:#f7f7f7;
`

class Index extends Component {
  render () {
    return (
      <div>
        <HomeNav/>
        <ContentStyle>
          <Content>
            231231
          </Content>
        </ContentStyle>
      </div>
    )
  }
}

export default Index