import React, { Component } from 'react'
import styled from 'styled-components'
import { Input } from 'antd'

const { Search } = Input

const ToolList = styled.div `
  margin:20px 0 0 0;

  .title {
    color:#aaa;
    background:#f3f3f3;
    padding:4px 0 4px 6px;
    font-size:14px;
    border-left:10px solid #e9e9e9;
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
      toolList: [
        { title: '代码高亮工具', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg' },
        { title: '代码格式化', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg' },
        { title: '设计沿用啊的说法', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg' },
      ]
    }
  }
  render () {
    return (
      <div>
        <Search
          placeholder="Search"
          onSearch={value => console.log(value)}
        />

        <ToolList>
          <p className="title">工具插件分享</p>
          {
            this.state.toolList.map((item, i) => {
              return (
                <div className="list-item" key={i}>
                  <img className="item-img" src={item.img} alt=""/>
                  <p className="item-title">{item.title}</p>
                </div>
              )
            })
          }

        </ToolList>
      </div>

    )
  }
}

export default RightSideBasicList