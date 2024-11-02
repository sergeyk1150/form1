import { useState } from 'react';

const initialState = {
	email: {
		name: 'email',
		value: '',
		valid: false,
		error: false,
	},
	password: {
		name: 'password',
		value: '',
		valid: false,
		error: false,
	},
	confirmPassword: {
		name: 'confirmPassword',
		value: '',
		valid: false,
		error: false,
	},
};

export const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, fieldValue, fieldValid, fieldError) => {
			setState({
				...state,
				[fieldName]: {
					name: fieldName,
					value: fieldValue,
					valid: fieldValid,
					error: fieldError,
				},
			});
		},
	};
};
