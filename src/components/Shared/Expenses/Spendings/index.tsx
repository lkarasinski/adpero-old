import React from 'react';
import {
	SpendingSummaryTitle,
	UnderlineHighlight,
	ColorHighlight,
} from '../_shared/styledComponents';

import { spending } from '@interfaces/spending';

interface Props {
	spendings: spending[];
}
/**
 * Renders a spending details
 * @param spendings - array of spendings
 */
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
