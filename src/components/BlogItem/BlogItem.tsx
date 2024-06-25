import React from 'react'
import './BlogItem.css'

type BlogItemProps = {
    id: number
    image: string
    date: string
    title: string
    description: string
    category: string
    year: number
}

const BlogItem = ({id, image, date, title, description, category, year}:BlogItemProps) => {
  return (
    <div className='blog-item'>
        <div className="pos-r">
            <div><img src={image} alt="blog-item" /></div>
            <div className="blog-item-date">{date}</div>
        </div>
        <div className="blog-item-info">
            <div className="blog-item-title">{title}</div>
            <p className="blog-item-desc">{description}</p>
            <div className="blog-item-tags d-f">
                <div>#{category}</div>
                <div>#{year}</div>
            </div>
        </div>
    </div>
  )
}

export default BlogItem
