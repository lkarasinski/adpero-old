import React from "react";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import handleLoginLogout from "utils/functions/handleLoginLogout";
import Button from "components/Atoms/Button";
import styled from "styled-components";

interface ButtonProps {
    isLoggedIn: boolean;
}

const StyledButton = styled(Button)<ButtonProps>`
    position: absolute;
    top: 2rem;
    right: 2rem;
    background-color: ${({ isLoggedIn, theme }) =>
        isLoggedIn ? theme.colors.red : theme.colors.green};
`;

const LogInButton: React.FC = () => {
    const [auth] = useAuthState(firebase.auth());
    return (
        <StyledButton
            isLoggedIn={!!auth}
            isContracted={false}
            onClick={() => handleLoginLogout(auth)}
        >
            {auth ? "Log out" : "Log in"}
        </StyledButton>
    );
};

export default LogInButton;
