import React, { useState } from 'react'
import styles from "../CSS/Register.module.css"
import chatLogo from "../Assest/chatLogo.jpg"
import Slay from "../Assest/Saly-10.png"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });



  const toastCss = {
    position: "bottom-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };


  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error( "Password and confirm password should be same.", toastCss);
      return false;
    } 
    else if (username.length < 3) {
      toast.error("Username should be greater than 3 characters.",toastCss);
      return false;
    } 
    else if (password.length < 8) {
      toast.error("Password should be equal or greater than 8 characters.", toastCss);
      return false;
    } 
    else if (email === "") {
      toast.error("Email is required.", toastCss);
      return false;
    }

    return true;
  };





  const handleSubmit =(e)=>{
    e.preventDefault();
    handleValidation()
    // console.log(values)
  }

  // console.log(values)
  return (
    <div className={styles.RegisterBox}>

    <div className={styles.leftBox}>

      <div className={styles.LogoBox}>
      <p>Chit Chat</p>
      <img src={chatLogo} alt="" className={styles.Logo}/>
      </div>

      <form onSubmit={(e)=>handleSubmit(e)}>

      <input type="text" placeholder='Enter Your Name' required name="username" onChange={(e) => handleChange(e)}/>

      <br/>

      <input type="email" placeholder='Enter Your Email' required name="email" onChange={(e) => handleChange(e)}/>

      <br/>
      
      <input type="password" placeholder='Create Password' required name="password" onChange={(e) => handleChange(e)}/>

      <br/>

      <input type="password" placeholder='Confirm Password'  required  name="confirmPassword" onChange={(e) => handleChange(e)}/>


      <br/>

      <button type='Submit'>REGISTER</button>


      </form>


      <span className={styles.Alredy}>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>


      </div>



      <div className={styles.rightBox}>
          <img src={Slay} alt="" />
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Register