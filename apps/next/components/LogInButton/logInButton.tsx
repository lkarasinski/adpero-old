import React from "react";
import styled from "styled-components";
import { Button } from "@adpero/ui";
import { useAuth } from "@adpero/contexts";
import { dashboardTheme } from "@adpero/themes";
import { EnterIcon, ExitIcon } from "@radix-ui/react-icons";

export const LogInButton = () => {
    const { user, login, logout } = useAuth();
    const isLoggedIn = !!user;
    const text = isLoggedIn ? "Log out" : "Log in";

    const handleLogin = () => {
        if (isLoggedIn) {
            logout();
        } else {
            login();
        }
    };

    return (
        <StyledButton
            color={
                isLoggedIn
                    ? dashboardTheme.colors.red.regular
                    : dashboardTheme.colors.green.regular
            }
            aria-label={text}
            onClick={handleLogin}
        >
            {text}
            {isLoggedIn ? <EnterIcon /> : <ExitIcon />}
        </StyledButton>
    );
};

const StyledButton = styled(Button)`
    margin-top: 0.5rem;
    gap: 0.5rem;
    height: 3rem;
    padding: 0;
    width: 10rem;
`;

export default LogInButton;
