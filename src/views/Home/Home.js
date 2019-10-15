import React, { Component } from 'react'
import HomeNav from '../../components/nav/HomeNav'
import ClassifyModules from '../../components/ClassifyModules/ClassifyModules'
import Banner from '../../components/banner/Banner'
import HomeSide from '../../components/side/HomeSide'
import styled from 'styled-components'
import { Layout } from 'antd';

const { Content } = Layout;

const ContentStyle = styled.div `
  max-width:1200px;
  margin:0 auto;
  padding:20px 0;
  overflow:hidden;
  display:flex;
  justify-content:space-between;
`
const HomeSideModuleStyle = styled.div `
  width:22%;
  background:#fafafa;
`

const ContentmoduleStyle = styled.div `
  width:78%;
  padding:0 20px;
  border-left:1px solid #efefef;
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
          <ClassifyModules/>
        </BannerArticleModule>

        <ContentStyle>
          <HomeSideModuleStyle>
            <HomeSide/>
          </HomeSideModuleStyle>
          <ContentmoduleStyle>
            <Content>231231</Content>
          </ContentmoduleStyle>
        </ContentStyle>
      </div>
    )
  }
}

export default Index