import React, { Component } from 'react'
import ClassifyModules from '../../components/ClassifyModules/ClassifyModules'
import Banner from '../../components/banner/Banner'
import TabList from '../../components/TabList/TabList'
import BasicList from '../../components/DataList/BasicList'
import RightSideBasicList from '../../components/RightSideBasicList/RightSideBasicList'
import styled from 'styled-components'

const ContentOutModuleStyle = styled.div `
  margin:0 auto;
  padding:20px 16px;
  overflow:hidden;
  background:#fff;
  max-width:1200px;
  display:flex;
  /* justify-content:space-between; */
  border:1px solid #efefef;
`
const BannerClassifyStyle = styled.div `
  /* background:green; */
  padding-bottom:26px;
`
// 列表样式
const ListStyle = styled.div `
  width:58%;
  padding:0 20px;

  .fetch-all-button {
    display:block;
    margin:30px auto 0;
    width:90%;
    border:none;
    background:#f50;
    color:#fff;
    padding:10px 0;
    cursor:pointer;
  }
`

// 左边栏样式
const LeftsideStyle = styled.div `
  padding: 0 20px 0 0;
  width:18%;
`

// 右边栏样式
const RightSideStyle = styled.div `
  /* background:pink; */
  width:24%;
  padding:0 0 0 20px;
`

class HomeIndexPage extends Component {
  render () {
    return (
      <div>
        <BannerClassifyStyle>
          <Banner/>
          <ClassifyModules/>
        </BannerClassifyStyle>
        <ContentOutModuleStyle>
          <LeftsideStyle>
            <TabList/>
          </LeftsideStyle>

          <ListStyle>
            <BasicList/>
            <button className="fetch-all-button">查看全部</button>
          </ListStyle>

          <RightSideStyle>
            <RightSideBasicList/>
          </RightSideStyle>

        </ContentOutModuleStyle>
      </div>
    )
  }
}

export default HomeIndexPage