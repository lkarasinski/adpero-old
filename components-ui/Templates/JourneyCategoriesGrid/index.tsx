import React from "react";
import styled from "styled-components";
import Label from "components-ui/Atoms/Label";

type Props = {
    label?: string;
};

const JourneyCategoriesGrid: React.FC<Props> = ({ label, children }) => {
    return (
        <Wrapper>
            {label ? (
                <HeadingContainer>
                    <Label isAccent>{label}</Label>
                </HeadingContainer>
            ) : null}
            <Grid>{children}</Grid>
        </Wrapper>
    );
};

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 19rem);
    gap: 2rem;
`;

const Wrapper = styled.div``;

const HeadingContainer = styled.div`
    margin: 2rem;
`;

export default JourneyCategoriesGrid;
