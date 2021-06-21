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
			let x = snap.data();
			let y = x?.expenses ?? [];
			values.details.forEach((element: any) => {
				y.push(element);
			});

			docRef.update({ expenses: [...y] });
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
									values.details.map(
										({ label, value }, i) => {
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
																		value={
																			j
																		}
																	>
																		{j}
																	</option>
																))}
															</select>
														)}
													</Field>
													<p>
														<span
															style={{
																fontSize:
																	'1.2em',
																fontWeight:
																	'bold',
															}}
														>
															{values.title}
														</span>{' '}
														{label}: {value}
													</p>
												</div>
											);
										}
									)
								}
							</FieldArray>
							<button type="submit">Submit</button>
						</Form>
						<pre>{JSON.stringify(values, null, 2)}</pre>
					</>
				)}
			</Formik>
		</div>
	);
};
