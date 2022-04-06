import React from "react";
import styled from "styled-components";
import { Button } from "@adpero/ui";
import { dashboardTheme } from "@adpero/themes";

type Props = {
    removeDetail: () => void;
};

export const RemoveDetailButton = ({ removeDetail }: Props) => {
    return (
        <StyledButton
            color={dashboardTheme.colors.gray.dark}
            hoverColor={dashboardTheme.colors.red.regular}
            type="button"
            onClick={() => removeDetail()}
        >
            Remove detail
        </StyledButton>
    );
};

const StyledButton = styled(Button)`
    margin-top: 16px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray.dark};
    border-radius: 4px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.background};
    }
`;
