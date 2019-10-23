import React, { Component } from 'react'
import styled from 'styled-components'
import { Pagination  } from 'antd'

const ListStyle = styled.div `
  border-left:1px solid #efefef;
  /* border-right:1px solid #efefef; */
  padding:0 40px;
  /* background:pink; */

  .module-title {
    padding-bottom:10px;
    border-bottom:1px solid #efefef;
  }

  .article-module {
    margin:20px 0 0 0;
    padding: 0 0 20px 0;
    border-bottom:1px solid #efefef;

    .article-img {
      display:block;
      width:100%;
    }

    .date-title {
      font-size:12px;
    }

    .data-content {
      margin-top:16px;
    }
  }

  .pagination {
    margin:20px 0 0 0;
  }

`
class BasicList extends Component {

  constructor (props) {
    super(props)

    this.state = {
      list: [
        { title: '大师傅大师傅大师傅大师傅大师傅大师傅大', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg', date: '2019-10-19', content: '师法第三方阿斯顿发师法第三方阿斯顿发师法第三方阿斯顿发大师法第三方阿斯顿发送到发送阿斯顿发送到发送到' },
        { title: '大师傅大师傅大师傅大师傅大师傅大师傅大', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg', date: '2019-10-19', content: '师法第三方阿斯顿发师法第三方阿斯顿发师法第三方阿斯顿发大师法第三方阿斯顿发送到发送阿斯顿发送到发送到' },
        { title: '大师傅大师傅大师傅大师傅大师傅大师傅大', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg', date: '2019-10-19', content: '师法第三方阿斯顿发师法第三方阿斯顿发师法第三方阿斯顿发大师法第三方阿斯顿发送到发送阿斯顿发送到发送到' },
        { title: '大师傅大师傅大师傅大师傅大师傅大师傅大', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg', date: '2019-10-19', content: '师法第三方阿斯顿发师法第三方阿斯顿发师法第三方阿斯顿发大师法第三方阿斯顿发送到发送阿斯顿发送到发送到' },
        { title: '大师傅大师傅大师傅大师傅大师傅大师傅大', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg', date: '2019-10-19', content: '师法第三方阿斯顿发师法第三方阿斯顿发师法第三方阿斯顿发大师法第三方阿斯顿发送到发送阿斯顿发送到发送到' },
        { title: '大师傅大师傅大师傅大师傅大师傅大师傅大', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg', date: '2019-10-19', content: '师法第三方阿斯顿发师法第三方阿斯顿发师法第三方阿斯顿发大师法第三方阿斯顿发送到发送阿斯顿发送到发送到' },
        { title: '大师傅大师傅大师傅大师傅大师傅大师傅大', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg', date: '2019-10-19', content: '师法第三方阿斯顿发师法第三方阿斯顿发师法第三方阿斯顿发大师法第三方阿斯顿发送到发送阿斯顿发送到发送到' },
        { title: '大师傅大师傅大师傅大师傅大师傅大师傅大', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg', date: '2019-10-19', content: '师法第三方阿斯顿发师法第三方阿斯顿发师法第三方阿斯顿发大师法第三方阿斯顿发送到发送阿斯顿发送到发送到' },
        { title: '大师傅大师傅大师傅大师傅大师傅大师傅大', img: 'http://image.uisdc.com/wp-content/uploads/2019/10/uisdc-banner-20191017-12.jpg', date: '2019-10-19', content: '师法第三方阿斯顿发师法第三方阿斯顿发师法第三方阿斯顿发大师法第三方阿斯顿发送到发送阿斯顿发送到发送到' }

      ]
    }
  }

  paginationDis = () => {
    return this.props.listType ? `block` : `none`
  }

  render () {
    return (
      <ListStyle>
        <h3 className="module-title">{this.props.listType}</h3>
        {
          this.state.list.map((item, i) => {
            return (
              <article className="article-module" key={i}>
                <h3 className="title"><a href="item">{item.title}</a></h3>
                <p className="date-title">{item.date}</p>
                {/* <img src={item.img} className="article-img"/> */}
                <p className="data-content">{item.content}</p>
              </article>
            )
          })
        }
        <Pagination defaultCurrent={6} total={500} className="pagination" style={{display: this.paginationDis()}}/>
      </ListStyle>
    )
  }
}

export default BasicList