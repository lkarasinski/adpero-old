import { addData } from "data";
import React from "react";
import { getAllJourneyIds, getJourneyData } from "../../lib/journeys";

export function getStaticProps({ params }: { params: any }) {
    const journeyData = getJourneyData(params.id);
    return { props: { journeyData } };
}

export function getStaticPaths() {
    const paths = getAllJourneyIds();
    return {
        paths,
        fallback: true,
    };
}

interface Props {
    journeyData: any;
}

const Journey: React.FC<Props> = ({ journeyData }) => {
    console.log(journeyData);
    console.log("start");
    addData("c");
    return (
        <div onClick={() => {}}>
            Hej - {journeyData.id}
            <button>doddaj :)</button>
        </div>
    );
};

export default Journey;
