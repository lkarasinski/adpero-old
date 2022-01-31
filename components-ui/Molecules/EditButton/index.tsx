import React from "react";
import styled from "styled-components";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Icon from "components-ui/Atoms/Icon";
import Button from "components-ui/Atoms/Button";
import Link from "next/link";

type ButtonProps = {
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    path: string;
    isMobile: boolean;
};

const StyledButton = styled(Button)<{ isMobile?: boolean }>`
    display: flex;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    max-width: ${({ isMobile }) => (isMobile ? "100%" : "19rem")};
    margin: 1rem 0;
    padding: 0;
`;

const EditButton: React.FC<ButtonProps> = ({ path, ...props }) => {
    return (
        <Link href={`${path}/edit`} passHref>
            <StyledButton {...props} as={"a"}>
                <>
                    <Icon icon={faEdit} />
                    Edit
                </>
            </StyledButton>
        </Link>
    );
};

export default EditButton;
