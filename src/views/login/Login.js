import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import styles from './style.less'

console.log(styles)
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
      <div className={styles.loginModule}>
        asdf
        {/* <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
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
          <Form.Item>
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

            <Button onClick={this.test}>测试</Button>

          </Form.Item>
          <p>important</p>
            <p>important</p>
        </Form> */}
      </div>
    )
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login)
export default WrappedNormalLoginForm