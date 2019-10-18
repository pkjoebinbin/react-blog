import React, { Component } from 'react'
import styled from 'styled-components'

const ListStyle = styled.div `

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
      <ListStyle>
        <p>asdfasdfsf</p>
      </ListStyle>
    )
  }
}

export default ArticleList