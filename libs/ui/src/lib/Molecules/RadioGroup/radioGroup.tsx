import RadioButton from "../RadioButton/radioButton";
import React from "react";
import styled from "styled-components";
import Text from "../../Atoms/Text/text";
import { dashboardTheme } from "@adpero/themes";

export type RadioGroupProps = {
    currentType: "Price" | "Text" | "Date" | "Address" | "";
    name: string;
    label: string;
    error: string;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
    currentType,
    name,
    label,
    error,
}) => {
    return (
        <div>
            <StyledText
                color={
                    error
                        ? dashboardTheme.colors.red.regular
                        : dashboardTheme.colors.gray.light
                }
            >
                {label}
            </StyledText>
            <Wrapper>
                <RadioButton
                    checked={currentType === "Price"}
                    name={`${name}.type`}
                    value={"Price"}
                    position="left"
                    error={!!error}
                />
                <RadioButton
                    checked={currentType === "Text"}
                    name={`${name}.type`}
                    value={"Text"}
                    position="center"
                    error={!!error}
                />
                <RadioButton
                    checked={currentType === "Date"}
                    name={`${name}.type`}
                    value={"Date"}
                    position="center"
                    error={!!error}
                />
                <RadioButton
                    checked={currentType === "Address"}
                    name={`${name}.type`}
                    value={"Address"}
                    position="right"
                    error={!!error}
                />
            </Wrapper>
            {error ? (
                <StyledText color={dashboardTheme.colors.red.regular}>
                    {error}
                </StyledText>
            ) : null}
        </div>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const StyledText = styled(Text)`
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    margin-left: 8px;
    transition: color 0.2s ease-in-out;
`;

export default RadioGroup;
