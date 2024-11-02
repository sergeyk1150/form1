export const getValid = (name, value, password) => {
	if (name === 'email') {
		return /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value);
	} else if (name === 'password') {
		return value.length >= 8;
	} else if (name === 'confirmPassword') {
		if (value === '') {
			return true;
		} else {
			return value === password;
		}
	}
};
