import Button from "components-ui/Atoms/Button";
import styled from "styled-components";

type Props = {
    isContracted: boolean;
};

const SidePanelButton = styled(Button)<Props>`
    width: ${({ isContracted }) => (isContracted ? "3rem" : "12rem")};
    min-width: auto;
    height: 3rem;
    padding: 0;
    gap: 0.5rem;
    transition: width 200ms ease-in-out;
`;

export default SidePanelButton;
