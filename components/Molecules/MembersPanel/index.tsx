import React from "react";
import Label from "components/Atoms/Label";
import Text from "components/Atoms/Text";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 2rem;
    background-color: "#ffffff";
`;

const Flex = styled.div`
    height: 150px;
    margin-top: 0.5rem;
`;

interface Props {
    members: string[];
}
const SummaryPanel: React.FC<Props> = ({ members }) => {
    return (
        <Wrapper>
            <Label isAccent>Members</Label>
            <Flex>
                {members.map((member, i) => {
                    return (
                        <Text key={i} isDark>
                            {member}
                        </Text>
                    );
                })}
            </Flex>
        </Wrapper>
    );
};

export default SummaryPanel;
