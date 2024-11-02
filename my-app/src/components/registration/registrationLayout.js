import styles from './registration.module.css';

export const RegistrationLayout = (props) => {
	const {
		updateState,
		email,
		password,
		confirmPassword,
		inputs,
		disabled,
		onChange,
		onBlur,
		onSubmit,
		submitButtonRef,
	} = props;
	return (
		<div className={styles.registration}>
			<form
				className={styles.registration__form}
				onSubmit={(event) => {
					onSubmit(event, email, password, confirmPassword);
				}}
			>
				<h2 className={styles.form__title}>Регистрация</h2>
				<label className={styles.label}>Email</label>
				<input
					className={`form-email ${styles.input}`}
					name={email.name}
					value={email.value}
					type="text"
					onChange={(target) => {
						onChange(target, updateState, password.value);
					}}
					onBlur={(target) => {
						onBlur(target, inputs, updateState);
					}}
				></input>
				{email.error && (
					<span className={styles.error}>Введите правильный адрес почты</span>
				)}
				<label className={styles.label}>Password</label>
				<input
					className={`form-password ${styles.input}`}
					name={password.name}
					value={password.value}
					type="password"
					onChange={(target) => {
						onChange(target, updateState, password.value);
					}}
					onBlur={(target) => {
						onBlur(target, inputs, updateState);
					}}
				></input>
				{password.error && (
					<span className={styles.error}>
						Пароль должен быть не мение 8 символов
					</span>
				)}
				<label className={styles.label}>Confirm the password</label>
				<input
					className={`form-password ${styles.input}`}
					name={confirmPassword.name}
					type="password"
					value={confirmPassword.value}
					onChange={(target) => {
						onChange(target, updateState, password.value);
					}}
					onBlur={(target) => {
						onBlur(target, inputs, updateState);
					}}
				></input>
				{confirmPassword.error && (
					<span className={styles.error}>Пароли не совпадают</span>
				)}
				<button
					className={`form__button ${styles.btn}`}
					ref={submitButtonRef}
					disabled={disabled}
					type="submit"
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
