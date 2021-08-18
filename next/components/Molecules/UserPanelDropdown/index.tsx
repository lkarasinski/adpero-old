import React from "react";
import UserIcon from "components/Atoms/UserIcon";
import styled from "styled-components";
import DropdownIcon from "components/Atoms/DropdownIcon";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
`;

interface Props {
    photoURL: string;
}

const UserPanelDropdown: React.FC<Props> = ({ photoURL }) => {
    return (
        <Wrapper>
            <UserIcon photoURL={photoURL} />
            <DropdownIcon />
        </Wrapper>
    );
};

export default UserPanelDropdown;
