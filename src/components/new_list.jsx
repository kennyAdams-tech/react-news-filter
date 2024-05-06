import React from 'react'
import News_list_items from './news_list_items'
const Newslist = (props) => {
    const items = props.item.map(news => {
        return <News_list_items key={news.id} news={news}/>
    })
  return (
    <div className='container'>
        {props.children}
        {items}
    </div>
  )
}

export default Newslist