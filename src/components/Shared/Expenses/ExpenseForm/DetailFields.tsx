import { RemoveDetailButton } from 'components/Shared/Expenses/shared/styledComponents';
import { Field, FormikErrors } from 'formik';
import * as React from 'react';
import { ExpenseFormValues } from 'interfaces/Expenses';
import { InputField } from './InputField';

interface Props {
	values: ExpenseFormValues;
	removeDetail: (
		values: ExpenseFormValues,
		i: number,
		j: number,
		setValues: (values: ExpenseFormValues) => void
	) => void;
	i: number;
	j: number;
	setValues: (values: ExpenseFormValues) => void;
	errors: FormikErrors<ExpenseFormValues>;
}

export const DetailFields: React.FC<Props> = ({
	values,
	removeDetail,
	i,
	j,
	setValues,
	errors,
}) => {
	return (
		<div>
			<InputField name={`[${i}].details[${j}].label`} errors={errors} />
			<InputField name={`[${i}].details[${j}].value`} errors={errors} />
			{values[i].details[j].type === 'Price' ? (
				<InputField
					name={`[${i}].details[${j}].currency`}
					errors={errors}
				/>
			) : null}
			<Field name={`[${i}].details[${j}].type`} as="select">
				<option></option>
				<option>Text</option>
				<option>Price</option>
				<option>Link</option>
			</Field>
			<RemoveDetailButton
				type="button"
				onClick={() => {
					removeDetail(values, i, j, setValues);
				}}
			/>
		</div>
	);
};
