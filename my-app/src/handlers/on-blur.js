export const onBlur = ({ target }, fields, updateState) => {
	let error = false;
	let valid = false;
	fields.forEach((field) => {
		if (field.name === target.name) {
			valid = field.valid;
			if (field.valid) {
				error = false;
			} else {
				error = true;
			}
		}
	});
	updateState(target.name, target.value, valid, error);
};
