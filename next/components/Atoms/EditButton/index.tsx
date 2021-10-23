import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { faSave, faEdit } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Atoms/Icon";

interface EditButtonProps {
    isInEditMode: boolean;
    isGrayedOut: boolean;
    onClick?: () => void;
}

const Button = styled.button<EditButtonProps>`
    position: absolute;
    top: 0;
    right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    padding: 1.15em 2em;
    margin: auto auto 0;
    font-size: 0.875rem;
    font-weight: 900;
    color: #ffffff;
    cursor: pointer;
    background-color: ${({ isInEditMode, isGrayedOut, theme }) =>
        isInEditMode
            ? isGrayedOut
                ? theme.colors.gray.light
                : theme.colors.green
            : theme.colors.primary};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
`;

const EditButton: React.FC<EditButtonProps> = ({ ...props }) => {
    const [textContent, setTextContent] = useState("Save");

    useEffect(() => {
        setTextContent(props.isInEditMode ? "Save" : "Edit");
    }, [props.isInEditMode]);

    return (
        <Button {...props}>
            <Icon icon={props.isInEditMode ? faSave : faEdit}></Icon>
            {textContent}
        </Button>
    );
};

export default EditButton;
