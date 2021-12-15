import React from "react";
import styled from "styled-components";
import Text from "components-ui/Atoms/Text";
import CrossIcon from "components-ui/Atoms/CrossIcon";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem;
    margin: 10px 32px 10px 0;
    border: 5px solid ${({ theme }) => theme.colors.red};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

interface Props {
    closeFunction: () => void;
}

const NotLoggedInBanner: React.FC<Props> = ({ closeFunction }) => {
    return (
        <Wrapper>
            <Text color="dark">
                You are not logged in. By logging in you get more functionality
                (polls, cloud storage and sharing your journeys with others). To
                log in go to the settings page.
            </Text>
            <CrossIcon
                aria-label="Close not logged in banner"
                callback={closeFunction}
            />
        </Wrapper>
    );
};

export default NotLoggedInBanner;
