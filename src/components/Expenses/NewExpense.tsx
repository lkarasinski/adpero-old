import { Field, FieldArray, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDocument } from 'react-firebase-hooks/firestore';
import firebase from '../../firebase';

interface Props {
	id: string;
}

interface detailProps {
	label: string;
	value: string;
	type: string;
}

interface valueProps {
	title: string;
	details: detailProps[];
}

export const NewExpense: React.FC<Props> = ({ id }) => {
	const [active] = useState(true);

	const journeysRef = firebase.firestore().collection('journeys');
	const docRef = journeysRef.doc(id);
	const [initial] = useDocument(docRef);

	const initialValues: valueProps = initial?.data()?.expenses ?? {
		title: '',
		details: [],
	};

	const updateDatabase = (values: any) => {
		docRef.get().then((snap) => {
			const dbData = snap.data();
			const dbExpenses = dbData?.expenses ?? [];
			const titles = [...dbExpenses.map((e: any) => e.title)];
			console.clear();
			if (titles.includes(values.title)) {
				for (let dbExpense of dbExpenses) {
					if (dbExpense.title === values.title) {
						dbExpense.details = values.details;
						const copy = dbData ?? {};
						docRef.update(copy);
					}
				}
			} else {
				const copy = dbData ?? {};
				copy.expenses.push(values);
				console.log(values);
				docRef.update(copy);
			}
		});
	};

	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={(values: any) => {
					updateDatabase(values);
				}}
			>
				{({ values }) => (
					<>
						<Form>
							<>
								<button
									type="button"
									onClick={() =>
										values.details.push({
											value: '',
											label: '',
											type: '',
										})
									}
								>
									add new expense
								</button>
							</>
							<Field name="title" disabled={!active} />
							<br />
							<FieldArray name="details">
								{() =>
									values.details.map((_, i) => {
										return (
											<div key={i}>
												<label
													htmlFor={`details.${i}.label`}
												>
													Label
												</label>
												<Field
													name={`details.${i}.label`}
													type="text"
													disabled={!active}
												/>
												<label
													htmlFor={`details.${i}.value`}
												>
													Value
												</label>
												<Field
													name={`details.${i}.value`}
													type="text"
													disabled={!active}
												/>
												<label
													htmlFor={`details.${i}.type`}
												>
													Type
												</label>
												<Field
													name={`details.${i}.type`}
													type="text"
													disabled={!active}
												>
													{({
														field,
													}: {
														field: any;
													}) => (
														<select {...field}>
															{[
																'',
																'Text',
																'Time / Date',
																'Price',
																'Link',
															].map((j) => (
																<option
																	key={j}
																	value={j}
																>
																	{j}
																</option>
															))}
														</select>
													)}
												</Field>
											</div>
										);
									})
								}
							</FieldArray>
							<button type="submit">Submit</button>
						</Form>
					</>
				)}
			</Formik>
		</div>
	);
};
