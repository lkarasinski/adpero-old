import React from "react";
import styled from "styled-components";
import { Button } from "@adpero/ui";
import { dashboardTheme } from "@adpero/themes";
import { mobileScreenSize } from "@adpero/constants";

type Props = {
    removeCategory: () => Promise<void>;
};

export const RemoveCategoryButton = ({ removeCategory }: Props) => {
    return (
        <StyledButton
            color={dashboardTheme.colors.red.regular}
            type="button"
            onClick={removeCategory}
        >
            Remove category
        </StyledButton>
    );
};

const StyledButton = styled(Button)`
    margin-right: 4rem;

    @media (max-width: ${mobileScreenSize}) {
        margin-bottom: 2rem;
    }
`;
