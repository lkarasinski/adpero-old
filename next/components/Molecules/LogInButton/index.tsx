import React from "react";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import handleLoginLogout from "utils/functions/handleLoginLogout";
import Button from "components/Atoms/Button";
import styled from "styled-components";
import useWindowWidth from "utils/functions/useWindowWidth";
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Atoms/Icon";

interface ButtonProps {
    isLoggedIn: boolean;
    isContracted: boolean;
}

const StyledButton = styled(Button)<ButtonProps>`
    position: absolute;
    top: 2rem;
    right: 2rem;
    gap: 0.5rem;
    height: 3rem;
    padding: 0;
    width: ${({ isContracted }) => (isContracted ? "3rem" : "10rem")};
    background-color: ${({ isLoggedIn, theme }) =>
        isLoggedIn ? theme.colors.red : theme.colors.green};
    transition: width 200ms ease-in-out;
`;

const LogInButton: React.FC = () => {
    const [auth] = useAuthState(firebase.auth());
    const width = useWindowWidth();
    const text = auth ? "Log out" : "Log in";
    return (
        <StyledButton
            isLoggedIn={!!auth}
            isContracted={width < 920}
            onClick={() => handleLoginLogout(auth)}
        >
            {width >= 920 && text}
            <Icon icon={auth ? faSignInAlt : faSignOutAlt} />
        </StyledButton>
    );
};

export default LogInButton;
