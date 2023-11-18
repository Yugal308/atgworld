import React from 'react'
import "./Signin.css"
import close from "../Assets/close.png"
import eye from "../Assets/eye.png"
import facebook from '../Assets/facebook.png'
import google from "../Assets/google.png"
import login from "../Assets/login.png"
const Signup = () => {
    return (
        <div className="Signin">
          <img src={close} alt="close icon" className='close' />
          <div className="signin_hero">
            <div className="signin_header">
              <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            </div>
            <div className="signin_main">
              <div className="signin_form">
                <p className="signin_title">
                  Sign In
                </p>
                <form className="form">
                  <input type="email" placeholder="Email" />
                  <div className="password">
                    <input type="password" placeholder="Password" />
                    <img src={eye} alt="eye" />
                  </div>
                  <button className="create_account">
                    Sign In
                  </button>
                  <div className="socials">
                    <div className="social">
                      <img src={facebook} alt="" />
                      Sign up with Facebook
                    </div>
                    <div className="social">
                      <img src={google} alt="" />
                      Sign up with Google
                    </div>
                    <p className="forget">Forgot Password?</p>
                  </div>
                </form>
              </div>
              <div className="signin_image">
                <div className="text">
                  <p>
                  Don’t have an account yet? <span>Create new for free!</span>
                  </p>
                </div>
                <img src={login} alt="Side Icon" className="login_icon" />
              </div>
            </div>
          </div>
        </div>
      )
}

export default Signup