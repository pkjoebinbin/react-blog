import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components'

const LoginModule = styled.div `
  height:100%;
  position:releative;

  .loginForm {
    width:350px;
    height:300px;
    position:absolute;
    margin:auto;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }
`

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: 1
    }
  }


  handleSubmit = e => {
    console.log(this.state)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  test = () => {

  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <LoginModule>
        <Form onSubmit={this.handleSubmit} className="loginForm">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '用户名不能为空' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item className="test">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '密码不能为空' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </LoginModule>
    )
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login)
export default WrappedNormalLoginForm