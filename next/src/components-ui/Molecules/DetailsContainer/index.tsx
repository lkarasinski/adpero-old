import React from "react";
import Text from "components-ui/Atoms/Text";
import styled from "styled-components";

export interface IDetail {
    label: string;
    value: string;
}

const Wrapper = styled.div``;

const DetailsContainer: React.FC<IDetail> = ({ label, value }) => {
    return (
        <Wrapper>
            <Text isSmall>{label}:</Text>
            <Text isDark>{value}</Text>
        </Wrapper>
    );
};

export default DetailsContainer;
