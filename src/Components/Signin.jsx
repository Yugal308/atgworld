import React, { useState } from 'react'
import  "./Signin.css"
import eye from "../Assets/eye.png"
import facebook from '../Assets/facebook.png'
import google from "../Assets/google.png"
import logi from "../Assets/login.png"
import close2 from "../Assets/close2.png"
const Signin = ({login,setLogin}) => {
  const [sign, setSign] = useState(true);
  return (
    <>
    {sign ? 
    <div className="signin_hero">
    <div className="signin_header">
      <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
    </div>
    <div className="signin_main">
      <div className="signin_form">
        <div className="signin_title">
          Create Account
          <img src={close2} alt="close icon" className="close2" onClick={()=>setLogin(!login)} />
        </div>
        <form className="form">
          <div className="name">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="email" placeholder="Email" />
          <div className="password">
            <input type="password" placeholder="Password" />
            <img src={eye} alt="eye" />
          </div>
          <input type="password" placeholder="Confirm Password"  />
          <div className="signin_button">
          <button className="create_account">
            Create Account
          </button>
          <p className="signin_small" onClick={()=>setSign(!sign)}>
            or, Sign In
          </p>
          </div>
          <div className="socials">
            <div className="social">
              <img src={facebook} alt="" />
              Sign up with Facebook
            </div>
            <div className="social">
              <img src={google} alt="" />
              Sign up with Google
            </div>
            <div className="form_footer">
            By signing up, you agree to our Terms & conditions, Privacy policy
            </div>
          </div>
        </form>
      </div>
      <div className="signin_image">
        <div className="text" onClick={()=>setSign(!sign)}>
          <p>
            Already have account? <span>Sign In</span>
          </p>
        </div>
        <img src={logi} alt="Side Icon" className="login_icon" />
        <p className="signin_footer">
        By signing up, you agree to our Terms & conditions, Privacy policy
        </p>
      </div>
    </div>
  </div> 
  : 
  <div className="signin_hero">
    <div className="signin_header">
      <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
    </div>
    <div className="signin_main">
      <div className="signin_form">
        <p className="signin_title">
          Sign In
          <img src={close2} alt="close icon" className="close2" onClick={()=>setLogin(!login)} />
        </p>
        <form className="form">
          <input type="email" placeholder="Email" />
          <div className="password">
            <input type="password" placeholder="Password" />
            <img src={eye} alt="eye" />
          </div>
          <div className="signin_button">
          <button className="create_account">
            Sign In
          </button>
          <p className="signin_small" onClick={()=>setSign(!sign)}>
            or, Create Account
          </p>
          </div>
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
          Don’t have an account yet? <span onClick={()=>setSign(!sign)}>Create new for free!</span>
          </p>
        </div>
        <img src={logi} alt="Side Icon" className="login_icon" />
      </div>
    </div>
  </div>
}
    </>
      
  )
}

export default Signin