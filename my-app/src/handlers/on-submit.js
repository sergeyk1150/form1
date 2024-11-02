import { sendFormData } from '../utils/send-form-data';

export const onSubmit = (event, email, password, confirmPassword) => {
	event.preventDefault();
	sendFormData({
		email: email.value,
		password: password.value,
		confirmPassword: confirmPassword.value,
	});
};
