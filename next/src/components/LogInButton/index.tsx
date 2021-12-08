import React, { useState } from "react";
import handleLoginLogout from "functions/handleLoginLogout";
import Button from "components-ui/Atoms/Button";
import styled from "styled-components";
import useWindowWidth from "hooks/useWindowWidth";
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Icon from "components-ui/Atoms/Icon";
import { useAuthUser } from "next-firebase-auth";

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
    const AuthUser = useAuthUser();
    const isLoggedIn = !!AuthUser.id;
    const [display, setDisplay] = useState(false);
    const [width] = useWindowWidth(setDisplay);
    const text = isLoggedIn ? "Log out" : "Log in";
    return display ? (
        <StyledButton
            aria-label={text}
            isLoggedIn={isLoggedIn}
            isContracted={width < 920}
            onClick={() => handleLoginLogout(isLoggedIn)}
        >
            {width >= 920 && text}
            <Icon icon={isLoggedIn ? faSignInAlt : faSignOutAlt} />
        </StyledButton>
    ) : null;
};

export default LogInButton;
