/* eslint-disable */

import { Form, Formik, FormikErrors } from 'formik';
import * as React from 'react';
import {
	Details,
	Expense,
	ExpenseFormValues,
} from '../../../../../interfaces/Expenses';
import firebase from '../../../../../firebase';
import { useDocument } from 'react-firebase-hooks/firestore';
import * as yup from 'yup';
import { TinyButton } from 'components/Shared/Buttons/TinyButton';
import { AddDetailButton } from 'components/Shared/Expenses/shared/styledComponents';
import { DetailFields } from './DetailFields';
import { InputField } from './InputField';

interface Props {
	docRef: firebase.firestore.DocumentReference<
		firebase.firestore.DocumentData
	>;
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const detailsSchema = {
	label: yup.string().required('Label is required').max(24),
	type: yup.string().required('Type is required'),
	value: yup
		.mixed()
		.required('Value is required')
		.when('type', {
			is: 'Price',
			then: yup
				.number()
				.typeError('Enter a number. For decimals use a dot '),
			otherwise: yup.string(),
		}),
	currency: yup.string().when('type', {
		is: 'Price',
		then: yup
			.string()
			.required('Currency is required')
			.test(
				'len',
				'Enter currency code. For example: USD, GBP',
				(val) => val?.length === 3
			),
	}),
};

const validationSchema = yup.array().of(
	yup.object({
		title: yup.string().required('Title is required').max(24),
		details: yup.array().of(yup.object().shape(detailsSchema)),
	})
);

/**
 * Creates a form that allows editing of a firestore document
 *  @param {firebase.firestore.DocumentReference<firebase.firestore.DocumentData>} docRef reference to the document that you want to edit
 *  @param { React.Dispatch<React.SetStateAction<boolean>>} setIsEditing state update function for isEditing
 */
export const ExpenseForm: React.FC<Props> = ({ docRef, setIsEditing }) => {
	const [firestoreData, loading] = useDocument(docRef);
	if (loading || !firestoreData) {
		return <div>Loading</div>;
	}

	const initialValues: ExpenseFormValues = firestoreData?.data()
		?.expenses ?? [
		{
			title: '',
			details: [{ label: '', value: '', type: '', currency: '' }],
		},
	];

	const updateDatabase = (values: ExpenseFormValues) => {
		docRef.get().then((snap) => {
			const dbData = snap.data();
			const copy = dbData ?? {};
			copy.expenses = values;
			docRef.set(copy);
		});
		setIsEditing(false);
	};

	const addNewExpense = (values: ExpenseFormValues): ExpenseFormValues => {
		const copy = values;
		copy.push({
			title: '',
			details: [
				{
					label: '',
					value: '',
					type: '',
					currency: '',
				},
			],
		});
		return copy;
	};

	const addNewDetail = (values: ExpenseFormValues, index: number) => {
		const copy = values;
		copy[index].details.push({
			label: '',
			value: '',
			type: '',
			currency: '',
		});
		return copy;
	};

	const removeExpense = (
		values: ExpenseFormValues,
		index: number,
		setValues: (values: ExpenseFormValues) => void
	): void => {
		setValues([...values.filter((expense) => expense !== values[index])]);
	};

	const removeDetail = (
		values: ExpenseFormValues,
		i: number,
		j: number,
		setValues: (values: ExpenseFormValues) => void
	): void => {
		const details = values
			.filter((expense) => expense === values[i])[0]
			.details.filter(
				(detail: Details) => detail !== values[i].details[j]
			);
		const result = [...values];
		result[i].details = details;
		setValues([...result]);
	};
	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={(values: ExpenseFormValues) => updateDatabase(values)}
				validationSchema={validationSchema}
			>
				{({
					values,
					setValues,
					errors,
				}: {
					values: ExpenseFormValues;
					setValues: (values: ExpenseFormValues) => void;
					errors: FormikErrors<ExpenseFormValues>;
				}) => {
					return (
						<>
							<Form>
								<TinyButton
									type="button"
									onClick={() => {
										setValues([...addNewExpense(values)]);
									}}
								>
									Add new expense
								</TinyButton>

								{values.map((expense: Expense, i: number) => (
									<div key={i} style={{ margin: '1em 0' }}>
										<InputField
											name={`[${i}].title`}
											errors={errors}
										/>
										<TinyButton
											onClick={() =>
												removeExpense(
													values,
													i,
													setValues
												)
											}
										>
											Remove this expense
										</TinyButton>
										{expense.details.map((_, j: number) => {
											return (
												<DetailFields
													key={j}
													values={values}
													removeDetail={removeDetail}
													i={i}
													j={j}
													setValues={setValues}
													errors={errors}
												/>
											);
										})}
										<AddDetailButton
											type="button"
											onClick={() => {
												setValues([
													...addNewDetail(values, i),
												]);
											}}
										>
											Add new detail
										</AddDetailButton>
									</div>
								))}

								<TinyButton type="submit">Submit</TinyButton>
							</Form>
						</>
					);
				}}
			</Formik>
		</div>
	);
};
