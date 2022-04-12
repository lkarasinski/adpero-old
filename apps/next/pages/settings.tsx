import * as React from "react";
import type { NextPage } from "next";
import { Heading, Label } from "@adpero/ui";
import LogInButton from "../components/LogInButton";
import { useAuth } from "@adpero/contexts";

const Settings: NextPage = () => {
    const { user } = useAuth();

    return (
        <div>
            <Heading>Settings</Heading>
            <Label>You are {user?.email ? "" : "not"} logged in</Label>
            <LogInButton />
        </div>
    );
};

export default Settings;
