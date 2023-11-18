import React, { useState } from 'react'
import logo from "../Assets/whole.png"
import search_icon from "../Assets/Search.png"
import arrow_down from "../Assets/arrow_down.png"
import "./Nav.css"
import Signin from './Signin'
import  "./Signin.css"
import close from "../Assets/close.png"
const Nav = () => {
  const [login,setLogin] = useState(false);
  return (
    <section className="nav">
        <img src={logo} alt="LOGO" className="logo" />
        <div className="searchbar">
            <img src={search_icon} alt="" />
            <input type="text" placeholder="Search for your favorite groups in ATG" className="search_input" />
        </div>
        {login ? 
        <>
            <div className="login_header"></div>
            <div className="login">
            <img src={close} alt="close icon" className='close' onClick={()=>setLogin(!login)} />
            <Signin/> 
          </div>
        </>
          : 
          <div className="signin" onClick={()=>setLogin(!login)}>
            <p>Create account. <span className="text_blue">It's free!</span></p>
            <img src={arrow_down} alt="Down arrow" />
          </div>
        }
        
    </section>
  )
}

export default Nav