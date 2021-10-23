import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "components/Atoms/Input";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 420px;
    gap: 3rem;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

const RadioContainer = styled.div`
    display: flex;
`;

interface EditDetailsCardProps {
    label: string;
    value: string;
    type: string;
    currency?: string;
}

const randomNumber = Math.floor(Math.random() * 1000000);

const EditDetailsCard: React.FC<EditDetailsCardProps> = ({
    label,
    value,
    type,
    currency,
}) => {
    const [labelState, setLabel] = useState(label);
    const [valueState, setValue] = useState(value);
    const [typeState, setType] = useState(type);
    const [currencyState, setCurrency] = useState(currency);

    useEffect(() => {
        console.log({ label: label, value: value, type: type });
    }, [label, value, type]);

    return (
        <Wrapper>
            <Input value={labelState} setValue={setLabel} />
            <Input value={valueState} setValue={setValue} />
            <RadioContainer>
                <div>
                    <input
                        type="radio"
                        id="link"
                        name={`type-${randomNumber}`}
                        value="link"
                        checked={typeState == "Link"}
                        onChange={() => setType("Link")}
                    ></input>
                    <label htmlFor="link">Link</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="price"
                        name={`type-${randomNumber}`}
                        value="price"
                        checked={typeState == "Price"}
                        onChange={() => setType("Price")}
                    ></input>
                    <label htmlFor="price">Price</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="text"
                        name={`type-${randomNumber}`}
                        value="text"
                        checked={typeState == "Text"}
                        onChange={() => setType("Text")}
                    ></input>
                    <label htmlFor="text">Text</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="date"
                        name={`type-${randomNumber}`}
                        value="date"
                        checked={typeState == "Date"}
                        onChange={() => setType("Date")}
                    ></input>
                    <label htmlFor="date">Date</label>
                </div>
            </RadioContainer>
            {type == "Price" && (
                // <Input value={currencyState ?? ""} setValue={setCurrency} />
                <div>elo</div>
            )}
        </Wrapper>
    );
};

export default EditDetailsCard;
