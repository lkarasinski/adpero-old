import React, { useState, createContext, useContext } from 'react';

let xd = 'chuj';

const JourneyContext = createContext({
	value: xd,
	setValue: (x: any) => {
		console.log(x);
		console.log(xd);
		xd = x;
		console.log(x);
		console.log(xd);
	},
});
const JourneyUpdateContext = createContext<Function>(() => true);

export const useJourney = () => {
	return useContext(JourneyContext);
};

export const useJourneyUpdate = () => {
	return useContext(JourneyUpdateContext);
};

const JourneyProvider: React.FC = ({ children }) => {
	const [SelectedJourney, setSelectedJourney] = useState('');
	return (
		<JourneyContext.Provider
			value={{
				value: SelectedJourney,
				setValue: () => console.log('boop'),
			}}
		>
			<JourneyUpdateContext.Provider value={setSelectedJourney}>
				{children}
			</JourneyUpdateContext.Provider>
		</JourneyContext.Provider>
	);
};

export default JourneyProvider;
