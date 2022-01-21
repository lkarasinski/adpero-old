import React, { useContext } from "react";
import styled from "styled-components";
import { faSave, faEdit } from "@fortawesome/free-solid-svg-icons";
import Icon from "components-ui/Atoms/Icon";
import Button from "components-ui/Atoms/Button";
import { FormContext } from "pages/journeys/[journeyID]";

type ButtonProps = {
    isGrayedOut?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    isInEditMode?: boolean;
};

type StyledButtonProps = Omit<ButtonProps, "type">;

const StyledButton = styled(Button)<StyledButtonProps>`
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    gap: 0.5rem;
    background-color: ${({ isInEditMode, isGrayedOut, theme }) =>
        isInEditMode
            ? isGrayedOut
                ? theme.colors.gray.light
                : theme.colors.green
            : theme.colors.primary};
    box-shadow: 0 0 4px ${({ theme }) => `${theme.colors.primary}80`};
`;

const EditButton: React.FC<ButtonProps> = ({ ...props }) => {
    const { isEditModeEnabled } = useContext(FormContext);

    return (
        <StyledButton {...props}>
            <>
                <Icon icon={isEditModeEnabled ? faSave : faEdit}></Icon>
                {isEditModeEnabled ? "Save" : "Edit"}
            </>
        </StyledButton>
    );
};

export default EditButton;
