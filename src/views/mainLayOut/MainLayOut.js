import React, { Component } from 'react'
import { Button, Modal } from 'antd'

class Mainlayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  node = () => {
    return (
      <h3>testsettest</h3>
    )
  }

  checkLogin = () => {
    if (this.state.a !== 2) {
      return Modal.info({
        title: '提示',
        closable: true,
      })
    }
  }

  componentWillMount () {
    // this.checkLogin()

    Modal.info({
      title: 'fun',
      onOk: () => {
        // this.props.history.push('./login')
      }

    })
  }

  show = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render () {
    return (
      <div className="Mainlayout">
        <Button onClick={this.show}>123</Button>
        <Modal visible={this.state.visible} title="test" onOk={this.handleOk} onCancel={this.handleOk}>
          rrrrrrr
        </Modal>

      </div>
    )
  }
}

export default Mainlayout