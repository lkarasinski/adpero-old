import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { dashboardTheme } from "@adpero/themes";
import { Button } from "@adpero/ui";
import { Pencil2Icon } from "@radix-ui/react-icons";

export const EditButton = ({ asPath }: { asPath: string }) => {
    return (
        <Link href={asPath + "/edit"} passHref>
            <StyledButton color={dashboardTheme.colors.primary.regular}>
                <Pencil2Icon />
                Edit
            </StyledButton>
        </Link>
    );
};

const StyledButton = styled(Button)`
    gap: 0.5rem;
`;
