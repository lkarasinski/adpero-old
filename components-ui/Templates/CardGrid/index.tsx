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
                <HeadingContainer>
                    <Label isAccent>{label}</Label>
                </HeadingContainer>
            ) : null}
            <Grid isMobile={isMobile}>{children}</Grid>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const HeadingContainer = styled.div`
    margin: 2rem;
`;

export default CardGrid;
