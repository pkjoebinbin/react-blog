import React, { Component } from 'react'
import ClassifyModules from '../../components/ClassifyModules/ClassifyModules'
import Banner from '../../components/banner/Banner'
// import HomeSide from '../../components/side/HomeSide'
import BasicList from '../../components/DataList/BasicList'

import styled from 'styled-components'

const ContentOutModuleStyle = styled.div `
  margin:0 auto;
  padding:20px 16px;
  overflow:hidden;
  background:#fff;
  max-width:1200px;
  display:flex;
  justify-content:space-between;
  border:1px solid #efefef;
`
const BannerClassifyStyle = styled.div `
  /* background:green; */
  padding-bottom:26px;
`
// 列表样式
const ListStyle = styled.div `
  /* background:red; */
  width:75.9%;
`

// 左边栏样式
const LeftsideStyle = styled.div `
  /* background:green; */
  width:23.6%;
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
            {/* <HomeSide/> */}
          </LeftsideStyle>

          <ListStyle>
            <BasicList/>
          </ListStyle>
        </ContentOutModuleStyle>
      </div>
    )
  }
}

export default HomeIndexPage