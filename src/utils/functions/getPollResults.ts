import { Expense } from '@utils/interfaces/Expenses';
import { Vote } from '@utils/interfaces/Votes';

interface Props {
	votes: Vote[];
	options: Expense[];
}

const getMaxValueIndices = (array: number[], value: number) => {
	const indices = [];
	let index = array.indexOf(value);
	while (index != -1) {
		indices.push(index);
		index = array.indexOf(value, index + 1);
	}
	return indices;
};

const getAverageVoteScore = (array: Expense[], votes: Vote[]) => {
	const results: number[] = [];
	for (let i = 0; i < array.length; i++) {
		const optionVotes = votes.filter((vote) => vote.id == i);
		if (optionVotes.length >= 1) {
			const values: number[] = optionVotes.map((vote) =>
				Number(vote.value)
			);
			const valuesAverage =
				values.reduce((a: number, b: number) => a + b) / values.length;
			results.push(valuesAverage);
		}
	}
	return results;
};

/**
 *	Takes votes and expenses and transfers them to array of expenses with most points from the votes
 * @param votes - Array of votes
 * @param options - Array of expenses
 * @returns Array of expenses with the best vote scored
 */

export const getPollResults = ({ votes, options }: Props): Expense[] => {
	const averageScore = getAverageVoteScore(options, votes);
	const maxValueIndices = getMaxValueIndices(
		averageScore,
		Math.max(...averageScore)
	);
	return maxValueIndices.map((index: number) => options[index]);
};
