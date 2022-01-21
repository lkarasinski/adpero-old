import * as React from "react";
import "firebase/firestore";
import { ContextReturnType } from "./types";
import useJourneysManager from "./useJourneysManager";

const JourneysContext = React.createContext<ContextReturnType>(
    {} as ContextReturnType
);

export const JourneysProvider: React.FC = ({ children }) => (
    <JourneysContext.Provider value={useJourneysManager()}>
        {children}
    </JourneysContext.Provider>
);

const useJourneys = (): ContextReturnType => {
    const context = React.useContext(JourneysContext);
    console.log(context);
    if (context === undefined) {
        throw new Error("useJourneys must be used within a JourneysProvider");
    }
    return context;
};

export default useJourneys;
