import React, { Component } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'

const BannerStyle = styled.div `
  height:340px;
  margin: 40px 0 20px 0;
  display:flex;

  .left-banner-module {
    width:50%;
    height:100%;
    margin-right:5px;

    .ant-carousel {
      height:100%;
      background:red;
    }
  }

  .img {
    display:block;
    width:100%;
  }

  .left-banner-height {
    display:flex;
  }

  .right-banner-module {
    background:blue;
    width:50%;
    margin-left:5px;
    justify-content:center;
    align-items:center;
  }

  .right-banner-img {
    width:48%;
  }
`
export default class extends Component {
  constructor (props) {
    super(props)
  }

  state = {
    imgs: [
      'https://image.uisdc.com/wp-content/uploads/2019/08/uisdc-bbanner-dark.jpg',
      'https://image.uisdc.com/wp-content/uploads/2019/08/uisdc-bbanner-ml0806.jpg'
    ],

    rightBannerList: [
      'https://image.uisdc.com/wp-content/uploads/2019/08/uisdc-bbanner-dark.jpg',
      'https://image.uisdc.com/wp-content/uploads/2019/08/uisdc-bbanner-ml0806.jpg',
      'https://image.uisdc.com/wp-content/uploads/2019/08/uisdc-bbanner-dark.jpg',
      'https://image.uisdc.com/wp-content/uploads/2019/08/uisdc-bbanner-ml0806.jpg'
    ]
  }

  render () {
    return (
      <BannerStyle>
        <div className="left-banner-module">
          <Carousel>
            {
              this.state.imgs.map((item, key) => {
                return (
                  <div>
                    <img src={item} alt="" key={key} className="img"/>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="right-banner-module">
          {
            this.state.rightBannerList.map((item, key) => {
              return (
                <img src={item} alt="" key={key} className="right-banner-img"/>
              )
            })
          }
        </div>
      </BannerStyle>
    )
  }
}