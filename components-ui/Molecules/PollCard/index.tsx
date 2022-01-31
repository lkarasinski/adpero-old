import React from "react";
import Label from "components-ui/Atoms/Label";
import Text from "components-ui/Atoms/Text";
import styled from "styled-components";
import Card from "components-ui/Atoms/Card";
import { Poll } from "utils/interfaces";

type Props = { poll: Poll; journeyName?: string; isMobile: boolean };

const PollCard: React.FC<Props> = ({ poll, journeyName, isMobile }) => {
    return (
        <StyledCard isMobile={isMobile}>
            {journeyName ? <Text color="dark">{journeyName}</Text> : null}
            <Label>{poll.title}</Label>
            {poll.content.length > 0 && (
                <CategoriesContainer>
                    {poll.content.map((category) => (
                        <Text key={category.id}>{category.title}</Text>
                    ))}
                </CategoriesContainer>
            )}
        </StyledCard>
    );
};

const StyledCard = styled(Card)<{ isMobile?: boolean }>`
    width: ${({ isMobile }) => (isMobile ? "100%" : "19rem")};
    min-height: ${({ isMobile }) => (isMobile ? "100%" : "5rem")};
    padding: ${({ isMobile }) => (isMobile ? "1.5rem 2rem" : "2rem")};
`;

const CategoriesContainer = styled.div`
    margin-top: 1rem;
`;

export default PollCard;
