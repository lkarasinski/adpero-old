import React from "react";
import { withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";

const Polls: React.FC = () => {
    return <></>;
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Polls);
