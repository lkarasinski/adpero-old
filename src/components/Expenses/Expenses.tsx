import React, { useState } from 'react';

import { ExpensesList } from './ExpensesList';
import { NewExpense } from './NewExpense';

interface Props {
	id: string;
	journeyData: any;
	editor: boolean;
}

export const Expenses: React.FC<Props> = ({ journeyData, id, editor }) => {
	const [isEditing, setIsEditing] = useState(false);
	return (
		<>
			<button onClick={() => setIsEditing(!isEditing)}>
				{isEditing ? 'Stop editing' : 'Edit'}
			</button>
			{!isEditing ? <ExpensesList journeyData={journeyData} /> : null}
			{editor && isEditing ? <NewExpense id={id} /> : null}
		</>
	);
};
