import React, { Component } from 'react'
import styled from 'styled-components'
import { Input, List, Affix } from 'antd'

const { Search } = Input

const data = [
  // '代码高亮，代码高亮代码高亮',
  // 'Japanese princess to wed commoner.',
  // 'Australian walks 100km after outback crash.',
  // 'Man charged over missing wedding girl.',
  // 'Los Angeles battles huge wildfires.'
]

const ToolList = styled.div `
  margin:20px 0 0 0;

  /* .title {
    color:#aaa;
    background:#f3f3f3;
    padding:4px 10px 4px 6px;
    font-size:14px;
    border-left:10px solid #e9e9e9;
    margin-bottom:16px;
    display:flex;
    justify-content:space-between;

    p {
      margin:0;
    }

  } */

  .title-module {
    display:flex;
    justify-content:space-between;
    align-items:center;

    .title {
      font-weight:bold;
      margin:0;
    }

    .more {
      font-size:10px;
      color:#888;
      border:1px solid #efefef;
      padding:3px 5px;
      cursor: pointer;
    }
  }



  .list-item {
    border:1px solid #efefef;
    margin:0 0 20px 0;
    padding:6px 6px 0 6px;
  }

  .item-img {
    display:block;
    width:100%;
  }

  .item-title {
    margin:10px 0;
    border-left:3px solid #ff5a00;
    padding-left:6px;
  }
`

class RightSideBasicList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      offSetTop: 80,    // 左边栏图钉参数
      test: true,
      toolList: [
        { title: '代码高亮工具', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg' },
        { title: '代码格式化', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg' },
        { title: '设计沿用啊的说法', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg' },
      ]
    }
  }
  render () {
    return (
      <Affix offsetTop={this.state.offSetTop}>
        <Search placeholder="Search" onSearch={value => console.log(value)}/>
        <ToolList>
          <List
            size="small"
            header = {
              <div className="title-module">
                <p className="title">工具插件</p>
                <p style={{margin:0}} className="more">MORE</p>
              </div>
            }
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </ToolList>
      </Affix>
    )
  }
}

export default RightSideBasicList