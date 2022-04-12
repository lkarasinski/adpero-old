import * as React from "react";
import { ContextReturnType } from "./types";
import useJourneysManager from "./useJourneyManager";

const JourneysContext = React.createContext<ContextReturnType>(
    {} as ContextReturnType
);

export const JourneysProvider: React.FC = ({ children }) => (
    <JourneysContext.Provider value={useJourneysManager()}>
        {children}
    </JourneysContext.Provider>
);

export const useJourneys = (): ContextReturnType => {
    const context = React.useContext(JourneysContext);
    if (context === undefined) {
        throw new Error("useJourneys must be used within a JourneysProvider");
    }
    return context;
};

export default useJourneys;
