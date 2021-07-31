import React from "react";

interface Props {
    a: number;
    b: number;
}

const Label: React.FC<Props> = ({ a, b }) => {
    return <div>label - {a + b}</div>;
};

export default Label;
