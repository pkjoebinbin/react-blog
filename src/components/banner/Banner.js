import React, { Component } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'


const BannerStyle = styled.div `
  height:340px;
  margin: 0 auto;
  max-width:1200px;
  display:flex;
  justify-content:space-between;

  .left-banner-module {
    width:50%;
    height:100%;
    margin-right:4px;

    .ant-carousel {
      height:100%;
      background:green;

      .left-banner-img {
        width:100%;
        display:block;
      }
    }
  }

  .left-banner-height {
    display:flex;
  }

  .right-banner-module {
    margin-left:4px;
    width:50%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    /* align-items:stretch; */
    align-content:space-between;
  }

  .right-banner-img {
    width:49.3%;
    .img-detail {
      width:100%;
      display:block;
    }
  }
`
export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {
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
  }

  render () {
    return (
      <BannerStyle>
        <div className="left-banner-module">
          <Carousel>
            {
              this.state.imgs.map((item, key) => {
                return (
                  <div key={key}>
                    <img src={item} alt=""className="left-banner-img"/>
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
                <div className="right-banner-img" key={key}>
                  <img src={item} alt={item} className="img-detail"/>
                  {/* <h3>{item}</h3> */}
                </div>
              )
            })
          }
        </div>
      </BannerStyle>
    )
  }
}