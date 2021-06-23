/* eslint-disable */

import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import {
	Details,
	Expense,
	ExpenseFormValues,
} from '../../../utilities/interfaces/ExpenseFormValues';
import firebase from './../../../firebase';
import { useDocument } from 'react-firebase-hooks/firestore';

interface Props {
	updateDB: (value: ExpenseFormValues) => void;
	docRef: firebase.firestore.DocumentReference<
		firebase.firestore.DocumentData
	>;
}

export const ExpenseForm: React.FC<Props> = ({ updateDB, docRef }) => {
	const [firestoreData, loading] = useDocument(docRef);
	if (loading || !firestoreData) {
		return <div>Loading</div>;
	}

	const initialValues: ExpenseFormValues = firestoreData?.data()?.expenses;

	const addNewExpense = (values: ExpenseFormValues): ExpenseFormValues => {
		const copy = values;
		copy.push({
			title: '',
			details: [
				{
					label: '',
					value: '',
					type: '',
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
				onSubmit={(values: ExpenseFormValues) => updateDB(values)}
			>
				{({
					values,
					setValues,
				}: {
					values: ExpenseFormValues;
					setValues: (values: ExpenseFormValues) => void;
				}) => {
					return (
						<>
							<Form>
								<button
									type="button"
									onClick={() => {
										setValues([...addNewExpense(values)]);
									}}
								>
									Add new expense
								</button>

								{values.map((expense: Expense, i: number) => (
									<div key={i} style={{ margin: '1em 0' }}>
										<Field name={`[${i}].title`} />
										<button
											onClick={() =>
												removeExpense(
													values,
													i,
													setValues
												)
											}
										>
											Remove this expense
										</button>
										{expense.details.map((_, j: number) => {
											return (
												<div
													key={j}
													style={{
														margin: '0.5em 0 0 0 ',
													}}
												>
													<Field
														name={`[${i}].details[${j}].label`}
													/>
													<Field
														name={`[${i}].details[${j}].value`}
													/>
													<Field
														name={`[${i}].details[${j}].type`}
													/>
													<button
														type="button"
														onClick={() => {
															removeDetail(
																values,
																i,
																j,
																setValues
															);
														}}
													>
														X
													</button>
												</div>
											);
										})}
										<button
											type="button"
											onClick={() => {
												setValues([
													...addNewDetail(values, i),
												]);
											}}
										>
											Add new detail
										</button>
									</div>
								))}

								<button type="submit">Submit</button>
							</Form>
						</>
					);
				}}
			</Formik>
		</div>
	);
};
