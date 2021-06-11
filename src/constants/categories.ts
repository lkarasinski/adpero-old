interface ICategories {
	[key: string]: string[];
}

const categories: ICategories = {
	transport: [
		'from',
		'to',
		'price',
		'link',
		'arrivalTime',
		'departureTime',
		'type',
	],
	accommodation: ['address', 'startDate', 'endDate', 'price', 'link'],
	entertainment: ['what', 'when', 'where', 'price', 'link'],
	publicTransport: ['price'],
};

export default categories;
