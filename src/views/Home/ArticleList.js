import React, { Component } from 'react'
import styled from 'styled-components'

const ListStyle = styled.div `
  background:red;
`

class ArticleList extends Component {
  render () {
    return (
      <ListStyle>
        article
      </ListStyle>
    )
  }
}

export default ArticleList