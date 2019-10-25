import React, { Component } from 'react'
import styled from 'styled-components'
import TabList from '../../components/TabList/TabList'

const HeaderStyle = styled.div `
  .title {
    font-weight:bold;
    text-align:center;
    color:#333;
  }

  .date-keyword {
    display:flex;
    justify-content:center;
  }
`

const ModuleStyle = styled.div `
  background:#fff;
  padding:20px 16px;
  display:flex;
`

const LeftSide = styled.div `
  width:18%;
  padding: 0 20px 0 0;
  border-right:1px solid #efefef;
`

const ContentSide = styled.div `
  width:82%;
  padding:0 20px;
`

class DetailPage extends Component {
  render () {
    return (
      <div>
        <HeaderStyle>
          <h1 className="title">用超多案例，帮你掌握 7 种最常用的排版方法！</h1>
          <div className="date-keyword">
            <p>更新时间：2019.10.19</p>
            <p>关键字：</p>
          </div>
        </HeaderStyle>
  
        <ModuleStyle>
          <LeftSide>
            <TabList/>
          </LeftSide>

          <ContentSide>

          </ContentSide>
        </ModuleStyle>
      </div>
    )
  }
}

export default DetailPage