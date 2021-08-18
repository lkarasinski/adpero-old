import React from "react";
import styled from "styled-components";

interface Props {
    photoURL: string;
}

const Wrapper = styled.div<Props>`
    width: 1.5rem;
    height: 1.5rem;
    background-image: url(${({ photoURL }) => photoURL});
    background-position: center;
    background-size: cover;
    border-radius: 50%;
`;

const UserIcon: React.FC<Props> = ({ photoURL }) => {
    return <Wrapper photoURL={photoURL}></Wrapper>;
};

export default UserIcon;
