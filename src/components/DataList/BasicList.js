import React, { Component } from 'react'
import styled from 'styled-components'

const ListStyle = styled.div `
  border-left:1px solid #efefef;
  padding-left:20px;

`
class BasicList extends Component {
  render () {
    return (
      <ListStyle>
        <h3>最新文章</h3>
        asdfasdf
        <br/>
        asdfasf
        <br/>
        adsfas
      </ListStyle>
    )
  }
}

export default BasicList