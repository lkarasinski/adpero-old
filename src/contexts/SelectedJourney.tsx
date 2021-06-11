import React, { useState, createContext, useContext } from 'react';

const JourneyContext = createContext('chuj');
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
		<JourneyContext.Provider value={SelectedJourney}>
			<JourneyUpdateContext.Provider value={setSelectedJourney}>
				{children}
			</JourneyUpdateContext.Provider>
		</JourneyContext.Provider>
	);
};

export default JourneyProvider;
