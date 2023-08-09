export const validation = data => {
	const errors = {};
	if (!data.name.trim()){
		errors.name = "نام را وارد کنید"
	} else {
		delete errors.name
	}
	if (!data.family.trim()){
		errors.family="نام خانوادگی را وارد کنید"
	} else {
		delete errors.family
	}
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
	if (!data.confirmPassword) {
		errors.confirmPassword = "لطفا پسورد را مجدد وارد کنید"
	}else if (data.confirmPassword !== data.password) {
		errors.confirmPassword = "پسورد وارد شده درست نیست"
	} else {
		delete errors.confirmPassword
	}
	
	return errors;
}