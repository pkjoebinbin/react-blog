import React, { Component } from 'react'
import HomeNav from '../../components/nav/HomeNav'
import Banner from '../../components/banner/Banner'
import styled from 'styled-components'
import { Layout } from 'antd';

const { Content } = Layout;

const ContentStyle = styled.div `
  height:100%;
  width:100%;
  margin:0 auto;
  background:#f7f7f7;
  overflow:hidden;
  margin-top:64px;
`

const BannerArticleModule = styled.div `
  padding:40px 0;
  background:#f7f7f7;
`

class Index extends Component {
  render () {
    return (
      <div>
        <HomeNav/>
        <BannerArticleModule>
          <Banner/>
        </BannerArticleModule>
        {/* <ContentStyle>
          <Content>231231</Content>
        </ContentStyle> */}
      </div>
    )
  }
}

export default Index