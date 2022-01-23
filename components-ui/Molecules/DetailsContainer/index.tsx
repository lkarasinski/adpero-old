import React from 'react';
import Text from 'components-ui/Atoms/Text';
import styled from 'styled-components';
import Anchor from 'components-ui/Atoms/Anchor';

export interface IDetail {
    label: string;
    value: string;
}

const Wrapper = styled.div``;

const withHttp = (url: string) =>
    url.replace(/^(?:(.*:)?\/\/)?(.*)/i, (match, schemma, nonSchemmaUrl) =>
        schemma ? match : `http://${nonSchemmaUrl}`
    );

const DetailsContainer: React.FC<IDetail> = ({ label, value }) => {
    return (
        <Wrapper>
            <Text isSmall>{label}:</Text>
            {label.toLowerCase() == 'link' ? (
                <Anchor href={withHttp(value)}>{value}</Anchor>
            ) : (
                <Text color="dark">{value}</Text>
            )}
        </Wrapper>
    );
};

export default DetailsContainer;
