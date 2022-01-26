import React from "react";
import Button from "components-ui/Atoms/Button";
import styled from "styled-components";
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Icon from "components-ui/Atoms/Icon";
import { useAuth } from "context/AuthContext";

interface ButtonProps {
    isLoggedIn: boolean;
    isContracted: boolean;
}

const StyledButton = styled(Button)<ButtonProps>`
    gap: 0.5rem;
    height: 3rem;
    padding: 0;
    width: ${({ isContracted }) => (isContracted ? "3rem" : "10rem")};
    background-color: ${({ isLoggedIn, theme }) =>
        isLoggedIn ? theme.colors.red : theme.colors.green};
    transition: width 200ms ease-in-out;
`;

const LogInButton: React.FC = () => {
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
            aria-label={text}
            isContracted={false}
            isLoggedIn={isLoggedIn}
            onClick={handleLogin}
        >
            {text}
            <Icon icon={isLoggedIn ? faSignInAlt : faSignOutAlt} />
        </StyledButton>
    );
};

export default LogInButton;
