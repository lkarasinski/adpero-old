import { TextField } from '@material-ui/core';
import { Field, FieldAttributes, useField } from 'formik';
import * as React from 'react';
import _ from 'lodash';

export const InputField: React.FC<FieldAttributes<Record<string, unknown>>> = ({
	...props
}) => {
	props;
	const [field, meta] = useField(props);

	const errorText = meta.error && meta.touched ? meta.error : '';
	return (
		<>
			<Field
				{...field}
				label={_.capitalize(props.name.split('.')[2])}
				name={props.name}
				as={TextField}
				helperText={errorText}
				error={!!errorText}
			/>
		</>
	);
};
