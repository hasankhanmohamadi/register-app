import React,{useState,useEffect} from "react";
import styles from "./Login.module.css";
import {validation} from "./validationLogIn.js"
import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";
import {notify} from "./Toast.js";
import 'react-toastify/dist/ReactToastify.css';
const LogIn = () => {
  const [data,setData] = useState({
    email:"",
    password:""
  })
  const [errors,setErrors] = useState({});
  const [touched,setTouched] = useState({});
  useEffect(() => {
    setErrors(validation(data))
    console.log(errors)
},[data, touched])
  const changeHandler = (event) => {
    if (event.target.name === "isAccepted"){
      setData({...data,[event.target.name]:event.target.checked})
    }else {
      setData({...data,[event.target.name]:event.target.value})
    }

  }
  const focusHandler = (event) => {
    setTouched({...touched,[event.target.name]:true})
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length){
      notify("با موفقیت وارد شدید" , "success")
    } else {
      notify("ورود موفقیت آمیز نبود" ,"error")
      setTouched({
        email:true,
        password:true
      })
    }
  }
	return (
		<div className={styles.body}>
		<div className={styles.bg}></div>
<form onSubmit={submitHandler}>
  <div className={styles.form_field}>
    <input type="text" value={data.email} name="email" className={styles.form_control} placeholder="ایمیل یا نام کاربری" onChange={changeHandler} onFocus={focusHandler}/>{errors.email && touched.email && <span className={styles.errors}>{errors.email}</span>}
  </div>
  
  <div className={styles.form_field}>
    <input type="password" name="password" value={data.password} className={styles.form_control} placeholder="پسورد" onChange={changeHandler} onFocus={focusHandler}/>{errors.password && touched.password && <span className={styles.errors}>{errors.password}</span>} 
  </div>
  <div className={styles.form_field}>
    <Link className={styles.back_signup} to="/">برگشت به صفحه ی ثبت نام</Link><button className={styles.btn} type="submit">ورود</button> 
  </div>
</form>
<ToastContainer />
		</div>
		)
}
export default LogIn