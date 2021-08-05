import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Label from "components/Atoms/Label";
import Text from "components/Atoms/Text";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
`;

interface FlexProps {
    direction: "row" | "column";
}

const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    flex-wrap: wrap;
    height: 150px;
    gap: ${({ direction }) => (direction === "row" ? "2rem" : "0")};
`;

interface Props {
    users: string[];
    summaryRef: any;
}
const SummaryPanel: React.FC<Props> = ({ users }) => {
    const numberOfFours = Math.ceil(users.length / 5);
    const wrapperRef = useRef<HTMLDivElement>(null!);
    const result = Array(numberOfFours);
    const [rednerHorizontal, setRednerHorizontal] = useState(false);
    const maxWidth = useRef(0);

    // for (let i = 0; i < users.length; i++) {
    //     result[Math.floor(i / 5)]
    //         ? result[Math.floor(i / 5)].push(users[i])
    //         : (result[Math.floor(i / 5)] = [users[i]]);
    // }

    // const membersDividedInFives = result.map((five, i) => (
    //     <div key={i}>
    //         {five.map((member: string, i: number) => (
    //             <Text isDark key={i}>
    //                 {member}
    //             </Text>
    //         ))}
    //     </div>
    // ));
    // const membersInList = users.map((member, i) => {
    //     return (
    //         <Text isDark key={i}>
    //             {member}
    //         </Text>
    //     );
    // });

    // useEffect(() => {
    //     maxWidth.current =
    //         wrapperRef.current.offsetLeft + wrapperRef.current.clientWidth;
    //     window.addEventListener("resize", () => {
    //         const windowWidth = window.innerWidth;
    //         console.log(windowWidth);
    //         console.log(maxWidth.current);
    //         setRednerHorizontal(maxWidth.current < windowWidth);
    //     });
    //     const windowWidth = window.innerWidth;
    //     setRednerHorizontal(maxWidth.current < windowWidth);
    // }, []);

    console.log(users);

    return (
        <Wrapper ref={wrapperRef}>
            <Label isAccent>Members</Label>
            <Flex direction={"column"}>
                {users.map((user, i) => {
                    return (
                        <Text key={i} isDark>
                            {user}
                        </Text>
                    );
                })}
            </Flex>
        </Wrapper>
    );
};

export default SummaryPanel;
