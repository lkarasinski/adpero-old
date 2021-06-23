import React, { useState } from 'react';

import { ExpensesList } from './ExpensesList';
import { Edit } from './Edit';

import { documentDataType } from '../../firebase';

interface Props {
	id: string;
	journeyData: documentDataType;
	editor: boolean;
}

export const Expenses: React.FC<Props> = ({ journeyData, id, editor }) => {
	const [isEditing, setIsEditing] = useState(true);
	return (
		<>
			<button onClick={() => setIsEditing(!isEditing)}>
				{isEditing ? 'Stop editing' : 'Edit'}
			</button>
			{!isEditing ? <ExpensesList journeyData={journeyData} /> : null}
			{editor && isEditing ? (
				<Edit id={id} setIsEditing={setIsEditing} />
			) : null}
		</>
	);
};
