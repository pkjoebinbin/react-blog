import React, { Component } from 'react'
import styled from 'styled-components'

const ModuleStyles = styled.div `
  margin: 0 auto;
  max-width:1200px;
  margin-top:26px;
  display:flex;
  justify-content:space-between;
  background:#f7f7f7;

  .section-modules {
    width:24.5%;
    background:#fff;
    padding:14px;
    border:1px solid #efefef;
  }

  .module-title {
    font-weight:bold;
    color:#525252;
    border-left:4px solid #ff5a00;
    padding-left:10px;
  }

  .hgroup {
    padding-top:10px;
  }

  .list-title {
    margin:0 0 4px 0;
  }

  .list-title:last-child {
    margin:0;
  }
`

export default class extends Component {
  constructor (props) {
    super(props)
  }

  state = {
    modulesList: [
      { title: '前端', payloadList: [11111111111,2222222222222,33333333333333,44444444444444] },
      { title: '后端', payloadList: [1,2,3,4] },
      { title: '设计', payloadList: [1,2,3,4] },
      { title: '其他', payloadList: [1,2,3,4] }
    ]
  }

  // 渲染模块逻辑
  showModules = () => {
    return (
      this.state.modulesList.map((item, i) => {
        return (
          <section key={i} className="section-modules">
            <h4 className="module-title">{item.title}</h4>
            <hgroup className="hgroup">
              {
                item.payloadList.map((itemTitle,key) => {
                  return (
                    <p key={key} className="list-title">{itemTitle}</p>
                  )
                })
              }
            </hgroup>
          </section>
        )
      })
    )
  }

  render () {
    return (
      <ModuleStyles>
        {this.showModules()}
      </ModuleStyles>
    )
  }
}

