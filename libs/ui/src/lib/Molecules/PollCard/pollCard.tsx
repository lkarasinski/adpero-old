import React from "react";
import styled from "styled-components";
import Label from "../../Atoms/Label/label";
import Text from "../../Atoms/Text/text";
import Card from "../../Atoms/Card/card";
import { Poll } from "@adpero/interfaces";
import { dashboardTheme } from "@adpero/themes";

export type PollCardProps = {
    poll: Poll;
    journeyName?: string;
    isMobile: boolean;
};

export const PollCard: React.FC<PollCardProps> = ({
    poll,
    journeyName,
    isMobile,
}) => {
    return (
        <StyledCard isMobile={isMobile}>
            {journeyName ? (
                <Text color={dashboardTheme.colors.gray.light}>
                    {journeyName}
                </Text>
            ) : null}
            <Label>{poll.title}</Label>
            {poll.content.length > 0 ? (
                <CategoriesContainer>
                    {poll.content.map((category) => (
                        <Text
                            color={dashboardTheme.colors.gray.light}
                            key={category.id}
                        >
                            {category.title}
                        </Text>
                    ))}
                </CategoriesContainer>
            ) : null}
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
