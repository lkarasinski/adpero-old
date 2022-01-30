import Heading from "components-ui/Atoms/Heading";
import Label from "components-ui/Atoms/Label";
import PageTransitionAnimation from "components-ui/Atoms/PageTransitionAnimation";
import LogInButton from "components/LogInButton";
import { useAuth } from "context/AuthContext";
import type { NextPage } from "next";

const Settings: NextPage = () => {
    const { user } = useAuth();
    return (
        <PageTransitionAnimation>
            <Heading>Settings</Heading>
            <Label>You are {user?.email ? "" : "not"} logged in</Label>
            <LogInButton />
        </PageTransitionAnimation>
    );
};

export default Settings;
