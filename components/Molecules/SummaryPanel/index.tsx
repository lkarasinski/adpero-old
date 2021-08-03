import React from "react";
import Label from "components/Atoms/Label";
import Text from "components/Atoms/Text";
import styled from "styled-components";

const Wrapper = styled.div`
    flex-grow: 1;
    max-width: 19rem;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 110px);
    gap: 20px;
    margin-top: 0.5rem;
`;

const DetailContainer = styled.div`
    display: grid;
    gap: 3px;
`;

const SummaryPanel: React.FC = () => {
    return (
        <Wrapper>
            <Label isAccent>Summary</Label>
            <Grid>
                <DetailContainer>
                    <Text isSmall>Cost:</Text>
                    <Text isDark>900 PLN</Text>
                </DetailContainer>
                <DetailContainer>
                    <Text isSmall>Departure date:</Text>
                    <Text isDark>06.09.2021</Text>
                </DetailContainer>
                <DetailContainer>
                    <Text isSmall>Number of people:</Text>
                    <Text isDark>1</Text>
                </DetailContainer>
                <DetailContainer>
                    <Text isSmall>Date of return:</Text>
                    <Text isDark>12.09.2021</Text>
                </DetailContainer>
            </Grid>
        </Wrapper>
    );
};

export default SummaryPanel;
