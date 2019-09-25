import React, { Component } from 'react'
import { Button, Modal } from 'antd'

class Mainlayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      a: 1
    }
  }

  checkLogin = () => {
    if (this.state.a !== 2) {
      return Modal.info({
        title: '提示',
        content: `用户暂未登陆`,
        closable: true
      })
    }
  }

  componentWillMount () {
    this.checkLogin()
  }


  render () {
    return (
      <div className="Mainlayout">
        <button onClick={this.test}>后台主页</button>
      </div>
    )
  }
}

export default Mainlayout