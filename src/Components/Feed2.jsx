import React from 'react'
import "./Feed2.css"
import "./feed.css"
import dots from "../Assets/dots.png"
import share from "../Assets/share.png"
import feed_views from "../Assets/views.png"

const Feed2 = ({button_title,feed_banner,feed_type,feed_title,author_image,author_name,feed_icon,desc,location_icon,location,color}) => {
  return (
    <div className="feed">
        {feed_banner ? <img src={feed_banner} alt="feed" className="feed_image" /> : <></>}
        <div className="feed_content">
            <img src={feed_type} alt="type" />
            <div className="feed_title">
                <p>{feed_title}</p>
                <img src={dots} alt="dots" />
            </div>
            <div className="feed2_desc">
                 <img src={feed_icon} alt="description" className="feed2_image1" />
                 {desc}
                 <img src={location_icon} alt="location" className="feed2_image2" />
                 {location}
            </div>
            <button className="feed_button_title" style={color={color}}>{button_title}</button>
            <div className="feed_author">
                <div className="author_desc">
                    <img src={author_image} alt="author" />
                    <div className="author_details">
                    <p className="author_name">
                        {author_name}
                    </p>
                    <p className="views_small">
                        1.4k views
                    </p>
                    </div>
                </div>
                <div className="feed_stats">
                    <img src={feed_views} alt="views" className="feed_views" />
                    <img src={share} alt="Share icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed2