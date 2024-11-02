import { getValid } from '../utils/get-valid';

export const onChange = ({ target }, updateState, password) => {
	const isValid = getValid(target.name, target.value, password);
	updateState(target.name, target.value, isValid, false);
};
