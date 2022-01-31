import React from "react";
import styled from "styled-components";
import Label from "components-ui/Atoms/Label";
import Grid from "components-ui/Atoms/Grid";
import useMobile from "hooks/useMobile";

type Props = {
    label?: string;
};

const CardGrid: React.FC<Props> = ({ label, children }) => {
    const isMobile = useMobile();
    return (
        <Wrapper>
            {label ? (
                <LabelContainer>
                    <Label isAccent>{label}</Label>
                </LabelContainer>
            ) : null}
            <Grid isMobile={isMobile}>{children}</Grid>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 2rem 0;
`;

const LabelContainer = styled.div`
    margin-bottom: 1rem;
`;

export default CardGrid;
