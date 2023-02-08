import React from 'react'
import styles from "../CSS/Register.module.css"
import chatLogo from "../Assest/chatLogo.jpg"
import Slay from "../Assest/Saly-10.png"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className={styles.RegisterBox}>

    <div className={styles.leftBox}>

      <div className={styles.LogoBox}>
      <p>Chit Chat</p>
      <img src={chatLogo} alt="" className={styles.Logo}/>
      </div>

      <input type="text" placeholder='Enter Your Name' required/>

      <br/>

      <input type="email" placeholder='Enter Your Email' required/>

      <br/>
      
      <input type="password" placeholder='Create Password' required/>

      <br/>

      <input type="password" placeholder='Confirm Password'  required />


      <br/>

      <button>REGISTER</button>



      <span className={styles.Alredy}>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>


      </div>



      <div className={styles.rightBox}>
          <img src={Slay} alt="" />
      </div>
    </div>
  )
}

export default Register