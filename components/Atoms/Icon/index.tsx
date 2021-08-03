import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
    icon: IconDefinition;
}

const Icon: React.FC<Props> = ({ icon }) => {
    return <FontAwesomeIcon icon={icon} />;
};

export default Icon;
