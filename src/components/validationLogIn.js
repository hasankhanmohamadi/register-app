export const validation = data => {
	const errors = {};
	if(!data.email){
		errors.email="ایمیل را وارد کنید"
	}else if (!/\S+@\S+\.\S+/.test(data.email)) {
		errors.email = "لطفا مقدار صحیح وارد کنید"
	}else {
		delete errors.email
	}
	if (!data.password){
		errors.password = "پسورد را وارد کنید"
	} else if (data.password.length < 8){
		errors.password = "حداقل 8 کاراکتر نیاز است"
	}else {
		delete errors.password
	}
	
	return errors;
}