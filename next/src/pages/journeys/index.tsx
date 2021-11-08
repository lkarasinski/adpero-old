import React from "react";
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from "next-firebase-auth";
import "firebase/firestore";
import CardsPanel from "components/Organisms/CardsPanel";
import useDashboardData from "hooks/useDashboardData";

const Journeys: React.FC = () => {
    const AuthUser = useAuthUser();
    const email = AuthUser.email;
    const [journeys] = useDashboardData(email);

    return journeys ? (
        <CardsPanel label="Your journeys" cards={journeys} />
    ) : null;
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Journeys);
