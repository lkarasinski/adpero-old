import React from "react";
import styled from "styled-components";
import Label from "../../Atoms/Label/label";
import Text from "../../Atoms/Text/text";
import Card from "../../Atoms/Card/card";
import { Poll } from "@adpero/interfaces";
import { dashboardTheme } from "@adpero/themes";
import { mobileScreenSize } from "@adpero/constants";

export type PollCardProps = {
    poll: Poll;
    journeyName?: string;
};

export const PollCard: React.FC<PollCardProps> = ({ poll, journeyName }) => {
    return (
        <StyledCard>
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

const StyledCard = styled(Card)`
    width: 19rem;
    min-height: 5rem;
    padding: 2rem;

    @media (max-width: ${mobileScreenSize}px) {
        width: 100%;
        min-height: 100%;
        padding: 1.5rem 2rem;
    }
`;

const CategoriesContainer = styled.div`
    margin-top: 1rem;
`;

export default PollCard;
