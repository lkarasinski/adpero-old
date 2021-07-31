import React from "react";
import { getAllPollIds, getJourneyData } from "../../lib/journeys";

export function getStaticProps({ params }: { params: any }) {
    console.log(params);
    return { props: { x: 4 } };
}

export function getStaticPaths() {
    const paths = getAllPollIds();
    console.log(paths);

    return {
        paths,
        fallback: true,
    };
}

interface Props {
    x: number;
}

const Journey: React.FC<Props> = (x) => {
    return (
        <div onClick={() => {}}>
            poll - {x.x}
            <button>doddaj :)</button>
        </div>
    );
};

export default Journey;
