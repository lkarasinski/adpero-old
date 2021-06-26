import React from 'react';
import {
	SpendingSummaryTitle,
	UnderlineHighlight,
	ColorHighlight,
} from '../shared/styledComponents';

import { spending } from '../../../utilities/interfaces/spending';

interface Props {
	spendings: spending[];
}

export const Spendings: React.FC<Props> = ({ spendings }) => {
	if (spendings.length === 0) {
		return null;
	}
	return (
		<>
			<UnderlineHighlight>
				<SpendingSummaryTitle>Spendings</SpendingSummaryTitle>
			</UnderlineHighlight>
			{spendings.map((spending, index) => (
				<div key={index}>
					{spending.value}{' '}
					<ColorHighlight>{spending.currency}</ColorHighlight>
				</div>
			))}
		</>
	);
};
