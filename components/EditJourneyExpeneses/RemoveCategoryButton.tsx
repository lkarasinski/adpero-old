import Button from "components-ui/Atoms/Button";
import React from "react";
import styled from "styled-components";

type Props = {
    removeCategory: () => Promise<void>;
};

const RemoveCategoryButton: React.FC<Props> = ({
    removeCategory,
    ...props
}) => {
    return (
        <StyledButton
            {...props}
            color="red"
            type="button"
            onClick={removeCategory}
        >
            Remove category
        </StyledButton>
    );
};

const StyledButton = styled(Button)`
    margin-right: 4rem;
`;

export default RemoveCategoryButton;
