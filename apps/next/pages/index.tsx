import styled from "styled-components";
import EditJourneyDataPanel from "../components/EditJourneyDataPanel";

const StyledPage = styled.div``;

export function Index() {
    return (
        <StyledPage>
            <EditJourneyDataPanel buttonText="Witam" />
        </StyledPage>
    );
}

export default Index;
