import { useRef } from 'react';
import { useStore } from '../../hooks/useStore';
import { onChange } from '../../handlers/on-change';
import { onBlur } from '../../handlers/on-blur';
import { onSubmit } from '../../handlers/on-submit';
import { RegistrationLayout } from './registrationLayout';

export const RegistrationContainer = () => {
	const { getState, updateState } = useStore();
	const { email, password, confirmPassword } = getState();
	const inputs = [email, password, confirmPassword];

	let disabled = inputs.some((field) => field.valid === false);

	const submitButtonRef = useRef(null);

	if (!disabled) {
		submitButtonRef.current.focus();
	}

	return (
		<RegistrationLayout
			updateState={updateState}
			email={email}
			password={password}
			confirmPassword={confirmPassword}
			inputs={inputs}
			disabled={disabled}
			onChange={onChange}
			onBlur={onBlur}
			onSubmit={onSubmit}
			submitButtonRef={submitButtonRef}
		/>
	);
};
