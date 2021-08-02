import Button from "components/Atoms/Button";
import Label from "components/Atoms/Label";
import Text from "components/Atoms/Text";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    min-width: 17rem;
    height: 100vh;
    padding: 2rem;
    padding-top: 6rem;
`;

const SidePanel: React.FC = () => {
    return (
        <Wrapper>
            <Label isAccent>Your journeys</Label>
            <Text isDark>Poznań</Text>
            <Button primary>Create new journey</Button>
        </Wrapper>
    );
};

export default SidePanel;
