import React,{useState,useEffect} from "react";
import styles from "./Signup.module.css";
import {validation} from "./validationSignUp.js"
import { ToastContainer } from 'react-toastify';
import {notify} from "./Toast.js";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
	const [data,setData] = useState({
		name:"",
		family:"",
		email:"",
		password:"",
		confirmPassword:"",
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
			notify("شما با موفقیت ثبت نام کردید" , "success")
		} else {
			notify("ثبت نام شما با مشکل مواجه شد" ,"error")
			setTouched({
				name:true,
				family:true,
				email:true,
				password:true,
				confirmPassword:true
			})
		}
	}
	const BgColor = {
		backgroundColor:'#e8e7ec',
	}
	return (
		<div>
			<div className={styles.wrapper} style={BgColor}>
			<div className={styles.inner}>
				<form onSubmit={submitHandler}>
					<h3>فرم ثبت نام</h3>
					<div className={styles.form_group}>
						<div className={styles.form_wrapper}>
							<label htmlFor="">نام خانوادگی</label>
							<input type="text" name="family" value={data.family} className={styles.form_control} onChange={changeHandler} onFocus={focusHandler}/>
							{errors.family && touched.family && <span className={styles.errors}>{errors.family}</span>}
						</div>
						<div className={styles.form_wrappe}>
							<label htmlFor="">نام</label>
							<input type="text" name="name" value={data.name} className={styles.form_control} onChange={changeHandler} onFocus={focusHandler}/>
							{errors.name && touched.name && <span className={styles.errors}>{errors.name}</span>}
						</div>
					</div>
					<div className={styles.form_wrapper}>
						<label htmlFor="">ایمیل</label>
						<input type="text" name="email" value={data.email} className={styles.form_control} onChange={changeHandler} onFocus={focusHandler}/>
						{errors.email && touched.email && <span className={styles.errors}>{errors.email}</span>}
					</div>
					<div className={styles.form_wrapper}>
						<label htmlFor="">پسورد</label>
						<input type="password" name="password" value={data.password} className={styles.form_control} onChange={changeHandler} onFocus={focusHandler}/>
						{errors.password && touched.password && <span className={styles.errors}>{errors.password}</span>}
					</div>
					<div className={styles.form_wrapper}>
						<label htmlFor="">تایید پسورد</label>
						<input type="password" name="confirmPassword" value={data.confirmPassword} className={styles.form_control} onChange={changeHandler} onFocus={focusHandler}/>
						{errors.confirmPassword && touched.confirmPassword && <span className={styles.errors}>{errors.confirmPassword}</span>}
					</div>
					<button type="submit" className={styles.btn_Signup}>ثبت نام</button><button type="submit" className={styles.to_Login}><Link className={styles.Link_to_Login} to="/LogIn">حساب دارید! وارد شوید</Link></button>
						
				</form>
				<ToastContainer />
			</div>
		</div>
		</div>
		
		)
}
export default SignUp;