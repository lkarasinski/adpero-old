import { Field, FieldArray, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDocument } from 'react-firebase-hooks/firestore';
import firebase from '../../firebase';

interface Props {
	id: string;
	setIsEditing: React.Dispatch<React.SetStateAction<string>>;
}
interface Props2 {
	field: any;
	expenses: any;
	setSelectedExpense: React.Dispatch<React.SetStateAction<string>>;
}

const ExpensesSelector: React.FC<Props2> = ({
	field,
	expenses,
	setSelectedExpense,
}) => {
	const temp = () => {
		setSelectedExpense('test');
		return;
	};
	if (field === null) {
		temp();
	}
	return (
		<select
			{...field}
			onChange={(e) => {
				const selected = expenses.filter(
					(x: any) => (x.title = e.target.value)
				);
				console.log(selected);
				// setSelectedExpense(selected);
			}}
		>
			<option value="test" />
			{expenses.map(({ title }: { title: string }, i: number) => {
				return (
					<option key={i} value={title}>
						{title}
					</option>
				);
			})}
		</select>
	);
};

interface IDetails {}
interface IValue {
	title: string;
	details: IDetails[];
}

export const NewExpense: React.FC<Props> = ({ id, setIsEditing }) => {
	const journeysRef = firebase.firestore().collection('journeys');
	const docRef = journeysRef.doc(id);
	const [data, loading] = useDocument(docRef);
	const [selectedExpense, setSelectedExpense] = useState<any>(null);

	let initialValues: IValue = selectedExpense ?? {
		title: '',
		details: [],
	};
	useEffect(() => {
		initialValues = setSelectedExpense;
	}, [selectedExpense]);

	const updateDatabase = (values: any) => {
		docRef.get().then((snap) => {
			const dbData = snap.data();
			const dbExpenses = dbData?.expenses ?? [];
			const titles = [...dbExpenses.map((e: any) => e.title)];
			if (titles.includes(values.title)) {
				for (const dbExpense of dbExpenses) {
					if (dbExpense.title === values.title) {
						dbExpense.details = values.details;
						const copy = dbData ?? {};
						docRef.update(copy);
					}
				}
			} else {
				const copy = dbData ?? {};
				copy.expenses.push(values);
				docRef.update(copy);
			}
		});
	};

	if (!loading) {
		return (
			<div>
				<Formik
					initialValues={initialValues}
					enableReinitialize={true}
					onSubmit={(values: any) => {
						updateDatabase(values);
						setIsEditing(false);
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
								<Field name="Title">
									{({ field }: { field: any }) => (
										<ExpensesSelector
											field={field}
											expenses={data?.data()?.expenses}
											setSelectedExpense={
												setSelectedExpense
											}
										/>
									)}
								</Field>

								<br />
								<FieldArray name="details">
									{() =>
										values.details.map((_, i: number) => {
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
													/>
													<label
														htmlFor={`details.${i}.value`}
													>
														Value
													</label>
													<Field
														name={`details.${i}.value`}
														type="text"
													/>
													<label
														htmlFor={`details.${i}.type`}
													>
														Type
													</label>
													<Field
														name={`details.${i}.type`}
														type="text"
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
	}
	return <div>Loading</div>;
};
