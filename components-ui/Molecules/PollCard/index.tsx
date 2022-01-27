import React from "react";
import Label from "components-ui/Atoms/Label";
import Text from "components-ui/Atoms/Text";
import styled from "styled-components";
import Card from "components-ui/Atoms/Card";
import { Poll } from "utils/interfaces";

type Props = { poll: Poll; journeyName?: string };

const PollCard: React.FC<Props> = ({ poll, journeyName }) => {
    return (
        <Card>
            {journeyName ? <Text color="dark">{journeyName}</Text> : null}
            <Label isAccent>{poll.title}</Label>
            <CategoriesContainer>
                {poll.content.map((category) => (
                    <Text key={category.id}>{category.title}</Text>
                ))}
            </CategoriesContainer>
        </Card>
    );
};

const CategoriesContainer = styled.div`
    margin-top: 1rem;
`;

export default PollCard;
