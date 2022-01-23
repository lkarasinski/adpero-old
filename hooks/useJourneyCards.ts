import useJourneys from 'context/JourneysContext';
import * as React from 'react';

const useJourneyCards = () => {
    const journeysContext = useJourneys();
    if (journeysContext == undefined) {
        console.error('useJourneyCards must be used within a JourneysContext');
    }
    const { journeys } = journeysContext;

    const journeyCards = React.useMemo(() => {
        return journeys.map(({ data }) => {
            return {
                label: data.name,
                id: data.id,
                expenses: data.expenses.map((expense) => expense.title),
            };
        });
    }, [journeys]);

    return journeyCards;
};

export default useJourneyCards;
