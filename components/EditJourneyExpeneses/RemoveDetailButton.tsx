import Button from "components-ui/Atoms/Button";
import React from "react";
import styled from "styled-components";

type Props = {
    removeDetail: () => void;
};

const RemoveDetailButton: React.FC<Props> = ({ removeDetail }) => {
    return (
        <StyledButton type="button" onClick={() => removeDetail()}>
            Remove detail
        </StyledButton>
    );
};

const StyledButton = styled(Button)`
    margin-top: auto;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray.dark};

    &:hover {
        background-color: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.background};
    }
`;

export default RemoveDetailButton;
