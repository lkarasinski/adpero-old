import React from "react";
import styled from "styled-components";
import Text from "components/Atoms/Text";
import CrossIcon from "components/Atoms/CrossIcon";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.75rem;
    margin: 10px 0;
    border: 5px solid ${({ theme }) => theme.colors.red};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

interface Props {
    closeFunction: () => void;
}

const NotLoggedInBanner: React.FC<Props> = ({ closeFunction }) => {
    return (
        <Wrapper>
            <Text isDark>
                You are not logged in. By logging in you get more functionality
                (polls, cloud storage and sharing your journeys with others).
            </Text>
            <CrossIcon closeFunction={closeFunction} />
        </Wrapper>
    );
};

export default NotLoggedInBanner;
