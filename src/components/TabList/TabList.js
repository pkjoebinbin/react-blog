import React, { Component } from 'react'
import styled from 'styled-components'
import { Affix } from 'antd'

const TabListStyle = styled.div `

  .title {
    color:#aaa;
    background:#f3f3f3;
    padding:4px 0 4px 6px;
    font-size:14px;
    border-left:10px solid #e9e9e9;
  }

  .tabList-module {
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;

    .tab-item {
      margin:0 0 8px 0;
      padding:4px 0;
      text-align:center;
      width:48%;
      border:1px solid #e9e9e9;
      cursor:pointer;
    }
  }


`

class TabList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tabList: [
        { title: 'webpack', type: '' },
        { title: 'vue', type: '' },
        { title: 'react', type: '' },
        { title: 'express', type: '' },
        { title: 'nodejs', type: '' },
        { title: '热门', type: '' },
      ],

      offSetTop: 80    // 左边栏图钉参数
    }
  }

  render () {
    return (
      <Affix offsetTop={this.state.offSetTop}>
        <TabListStyle>
          <p className="title">常用标签</p>
          <div className="tabList-module">
            {
              this.state.tabList.map((item, i) => {
                return (
                  <p className="tab-item" key={i}>{item.title}</p>
                )
              })
            }
          </div>
        </TabListStyle>
      </Affix>
    )
  }
}

export default TabList