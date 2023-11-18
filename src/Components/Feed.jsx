import React from 'react'
import "./feed.css"
import dots from "../Assets/dots.png"
import share from "../Assets/share.png"
import feed_views from "../Assets/views.png"

const Feed = ({feed_banner,feed_type,author_image,feed_title, feed_desc, author_name}) => {
  return (
    <div className="feed">
        <img src={feed_banner} alt="feed" className="feed_image" />
        <div className="feed_content">
            <img src={feed_type} alt="type" />
            <div className="feed_title">
                <p>{feed_title}</p>
                <img src={dots} alt="dots" />
            </div>
            <div className="feed_desc">
                 {feed_desc}
            </div>
            <div className="feed_author">
                <div className="author_desc">
                    <img src={author_image} alt="author" />
                    <p className="author_name">
                        {author_name}
                    </p>
                </div>
                <div className="feed_stats">
                    <img src={feed_views} alt="views" />
                    <img src={share} alt="Share icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed