import React from "react";
import Label from "components/Atoms/Label";
import Text from "components/Atoms/Text";
import styled from "styled-components";

const Wrapper = styled.div`
    flex-grow: 1;
    max-width: 70rem;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

const Grid = styled.div`
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    row-gap: 0.2rem;
    margin-top: 0.75rem;
`;

interface Props {
    users: string[];
}
const SummaryPanel: React.FC<Props> = ({ users }) => {
    return (
        <Wrapper>
            <Label isAccent>Members</Label>
            <Grid>
                {users &&
                    users.map((user, i) => (
                        <Text isDark key={user + i}>
                            {user}
                        </Text>
                    ))}
            </Grid>
        </Wrapper>
    );
};

export default SummaryPanel;
