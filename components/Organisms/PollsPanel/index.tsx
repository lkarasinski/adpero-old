import React from 'react';
import styled from 'styled-components';
import PollCard, { IPollCard } from 'components/Molecules/PollCard';
import Label from 'components/Atoms/Label';

interface Props {
    polls: IPollCard[];
}

const Wrapper = styled.div``;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 14rem);
    gap: 2.5rem;
    margin: 1.25rem 0;
`;

const PollsPanel: React.FC<Props> = ({ polls }) => {
    return (
        <Wrapper>
            <Label>{"Polls you haven't voted in yet"}</Label>
            <Grid>
                {polls &&
                    polls.map((poll, i) => (
                        <PollCard
                            key={poll.detail + poll.journeyName + i}
                            detail={poll.detail}
                            journeyName={poll.journeyName}
                        />
                    ))}
            </Grid>
            <hr />
        </Wrapper>
    );
};

export default PollsPanel;
