import Heading from "components-ui/Atoms/Heading";
import LogInButton from "components/LogInButton";
import { withAuthUserTokenSSR, withAuthUser } from "next-firebase-auth";
import React from "react";

const Settings: React.FC = () => {
    return (
        <>
            <Heading>Settings</Heading>
            <LogInButton />
        </>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Settings);
