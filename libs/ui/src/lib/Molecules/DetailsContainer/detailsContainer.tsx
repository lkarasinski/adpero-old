import React from "react";
import Text from "../../Atoms/Text/text";
import Anchor from "../../Atoms/Anchor/anchor";
import styled from "styled-components";

function withHttp(url: string) {
    return url.replace(
        /^(?:(.*:)?\/\/)?(.*)/i,
        (match, schemma, nonSchemmaUrl) =>
            schemma ? match : `http://${nonSchemmaUrl}`
    );
}

export interface DetailsContainerProps {
    label: string;
    value: string;
}

export const DetailsContainer: React.FC<DetailsContainerProps> = ({
    label,
    value,
}) => {
    return (
        <div>
            <StyledLabel>{label}:</StyledLabel>
            {label.toLowerCase() === "link" ? (
                <Anchor href={withHttp(value)}>{value}</Anchor>
            ) : (
                <Text color="dark">{value}</Text>
            )}
        </div>
    );
};

const StyledLabel = styled(Text)`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray.light};
`;

export default DetailsContainer;
