import useMobile from "hooks/useMobile";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

type Props = {
    isMobile?: boolean;
    callback: () => Promise<void>;
};

const DeleteButton: React.FC<Props> = ({ children, ...props }) => {
    const router = useRouter();
    const isMobile = useMobile();

    const handleClick = () => {
        props.callback();
        router.push("/");
    };

    return (
        <Button isMobile={isMobile} onClick={handleClick} {...props}>
            {children}
        </Button>
    );
};

const Button = styled.button<{ isMobile?: boolean }>`
    background-color: #fde3e3;
    color: ${({ theme }) => theme.colors.red};
    border: 2px solid ${({ theme }) => theme.colors.red};
    border-radius: 10px;
    font-weight: 900;
    font-size: 0.875rem;
    height: 2.75rem;
    width: ${({ isMobile }) => (isMobile ? "100%" : "30rem")};
    margin-top: 2rem;
    cursor: pointer;

    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.red};
        color: #fde3e3;
    }
`;

export default DeleteButton;
