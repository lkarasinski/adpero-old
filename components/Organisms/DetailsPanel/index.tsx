import DetailsCard from "components/Molecules/DetailsCard";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

const details = [
    { label: "Cost", value: "200 PLN" },
    { label: "Address", value: "Bieniowicza 13" },
    { label: "Check-in hour", value: "12 AM" },
    { label: "Link", value: "www.booking.com" },
    { label: "Bieniu", value: "Cieniu" },
];

const DetailsPanel: React.FC = () => {
    return (
        <Wrapper>
            <DetailsCard details={details} />
            <DetailsCard details={details} />
            <DetailsCard details={details} />
        </Wrapper>
    );
};

export default DetailsPanel;
