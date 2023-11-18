import React from 'react'
import "./Posts.css"
import arrow_down from "../Assets/arrow_down.png"
import group_join from "../Assets/group_icon.png"
import Feed from './Feed'
import banner1 from "../Assets/feed1_banner.png"
import feed_type1 from "../Assets/Article.png"
import author1 from "../Assets/author1.png"
import location from "../Assets/location.png"
import edit from "../Assets/edit.png"
import warning from "../Assets/warning.png"
import banner2 from "../Assets/feed2_banner.png"
import feed_type2 from "../Assets/Education.png"
import author2 from "../Assets/author2.png"
import Feed2 from './Feed2'
import feed_type3 from "../Assets/Meetup.png"
import author3 from "../Assets/author3.png"
import banner3 from "../Assets/feed3_banner.png"
import feed_type4 from "../Assets/Job.png"
import author4 from "../Assets/author4.png"
import calender from "../Assets/calender.png"
import job from "../Assets/job.png"

const Posts = () => {
  return (
    <div className="post">
        <div className="post_nav">
            <div className="post_tabs">
                <p className="tab active">All Posts(32)</p>
                <p className="tab ">Article</p>
                <p className="tab ">Event</p>
                <p className="tab ">Education</p>
                <p className="tab ">Job</p>
            </div>
            <div className="post_button">
                <div className="writepost">
                    Write a Post
                    <img src={arrow_down} alt="arrow_down" />
                </div>
                <div className="joingroup">
                    <img src={group_join} alt="icon" />
                    Join Group
                </div>
                <div className="filterall">
                    Filter: All
                    <img src={arrow_down} alt="arrow_down" />
                </div>
            </div>
        </div>
        <hr className="post_hr"/>
        <div className="Feed">
            <div className="feeds">
                <Feed feed_banner={banner1} feed_type={feed_type1} author_image={author1} feed_title="What if famous brands had regular fonts? Meet RegulaBrands!" feed_desc="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" author_name="Sarthak Kamra" />
                <Feed feed_banner={banner2} feed_type={feed_type2} author_image={author2} feed_title="Tax Benefits for Investment under National Pension Scheme launched by Government" feed_desc="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" author_name="Sarah West" />
                <Feed2 feed_banner={banner3} feed_type={feed_type3} author_image={author3} feed_title="Finance & Investment Elite Social Mixer @Lujiazui" button_title="Visit Website" author_name="Ronal Jones" feed_icon={calender} location_icon={location} desc = "Fri, 12 Oct, 2018" location="Ahmedabad, India" color="#E56135"  />
                <Feed2 feed_type={feed_type4} author_image={author4} feed_title="Software Developer" button_title="Apply on Timesjobs" author_name="Joseph Gray" feed_icon={job} location_icon={location} desc = "Innovaccer Analytics Private Ltd." location="Noida, India" color="#02B875" />
            </div>
            <div className="location">
                <div className="location_header">
                    <div className="main_location">
                        <img src={location} alt="location_icon"/>
                        Noida, India
                    </div>
                    <img src={edit} alt="edit_icon" />
                </div>
                <hr/>
                <div className="warning">
                    <img src={warning} alt="warning" className='warning_icon'/>
                    <p>Your location will help us serve better and extend a personalised experience.</p>
                </div>
            </div>    
        </div>
        
    </div>
  )
}

export default Posts