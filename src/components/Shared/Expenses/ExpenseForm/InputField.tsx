import { TextField } from '@material-ui/core';
import { Field, FieldAttributes, useField } from 'formik';
import * as React from 'react';
import _ from 'lodash';

export const InputField: React.FC<FieldAttributes<Record<string, unknown>>> = ({
	objectDepth = 0,
	...props
}) => {
	props;
	const [field, meta] = useField(props);

	const errorText = meta.error && meta.touched ? meta.error : '';

	const getLabel = () => {
		let name = '';
		const od = Number(objectDepth);
		if (objectDepth == 0) {
			name = props.name;
		} else {
			name = props.name.split('.')[od];
		}
		return _.capitalize(name);
	};
	return (
		<>
			<Field
				{...field}
				label={_.capitalize(getLabel())}
				name={props.name}
				as={TextField}
				helperText={errorText}
				error={!!errorText}
				variant="outlined"
			/>
		</>
	);
};
