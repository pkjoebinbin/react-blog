import React, { Component } from 'react'
import styled from 'styled-components'
import TabList from '../../components/TabList/TabList'
import BasicList from '../../components/DataList/BasicList'
import RightSideBasicList from '../../components/RightSideBasicList/RightSideBasicList'

const CenterStyle = styled.div `
  background:#fff;
  padding:20px 16px;
  display:flex;
`

const LeftsideStyle = styled.div `
  padding: 0 20px 0 0;
  width:18%;
  border-right:1px solid #efefef;
`

const RightSideStyle = styled.div `
  /* background:pink; */
  width:24%;
  padding:0 0 0 20px;
`

const ListStyle = styled.div `
  width:58%;
  padding:0 20px;
`

const TitleModule = styled.div `
  text-align:center;

  .title {
    color:#f50;
    font-weight:bold;
  }

  .count {
    margin:20px 0 30px;
  }
`



class ArticleList extends Component {

  componentDidMount = () => {
    console.log('did')
  }

  componentWillMount = () => {
    console.log('will')
  }

  render () {
    return (
      <div>
        <TitleModule>
          <h1 className="title">全部文章</h1>
          <p className="count">- 已经发布文章444篇 -</p>
        </TitleModule>
        <CenterStyle>
          <LeftsideStyle>
            <TabList/>
          </LeftsideStyle>

          <ListStyle>
            <BasicList listType="全部文章"/>
          </ListStyle>

          <RightSideStyle>
            <RightSideBasicList/>
          </RightSideStyle>
        </CenterStyle>
      </div>
    )
  }
}

export default ArticleList