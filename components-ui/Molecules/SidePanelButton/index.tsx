import Button from "components-ui/Atoms/Button";
import styled from "styled-components";

const SidePanelButton = styled(Button)`
    width: 12rem;
    min-width: auto;
    height: 3rem;
    padding: 0;
    gap: 0.5rem;
    transition: width 200ms ease-in-out;
`;

export default SidePanelButton;
