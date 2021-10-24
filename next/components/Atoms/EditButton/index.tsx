import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { faSave, faEdit } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Atoms/Icon";
import Button from "components/Atoms/Button";

interface EditButtonProps {
    isInEditMode: boolean;
    isGrayedOut: boolean;
    onClick?: () => void;
}

const StyledButton = styled(Button)<EditButtonProps>`
    position: absolute;
    top: 0;
    right: 2rem;
    background-color: ${({ isInEditMode, isGrayedOut, theme }) =>
        isInEditMode
            ? isGrayedOut
                ? theme.colors.gray.light
                : theme.colors.green
            : theme.colors.primary};
`;

const EditButton: React.FC<EditButtonProps> = ({ ...props }) => {
    const [textContent, setTextContent] = useState("Save");

    useEffect(() => {
        setTextContent(props.isInEditMode ? "Save" : "Edit");
    }, [props.isInEditMode]);

    return (
        <StyledButton {...props}>
            <Icon icon={props.isInEditMode ? faSave : faEdit}></Icon>
            {textContent}
        </StyledButton>
    );
};

export default EditButton;
