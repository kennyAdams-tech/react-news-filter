import React from 'react'

const News_list_items = ({news}) => {
  return (
    <div className='mt-4'>
        <h3 className='fs-2'>{news.id + ")"} {news.title}</h3>
        <div className='m-3 card p-3'>
            {news.feed}
        </div>
    </div>  
  )
}

export default News_list_items
{/* <div className='mt-4'>
            <h1 className='fs-2'>{news.id + ")"} {news.title}</h1>
            <div className='m-3 card p-3'>
                {news.feed}
            </div>
        </div> */}