import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dashboardTheme } from "@adpero/themes";
import { Button } from "@adpero/ui";

export const EditButton = ({ asPath }: { asPath: string }) => {
    return (
        <Link href={asPath + "/edit"} passHref>
            <StyledButton color={dashboardTheme.colors.primary.regular}>
                <FontAwesomeIcon icon={faEdit} />
                Edit
            </StyledButton>
        </Link>
    );
};

const StyledButton = styled(Button)`
    gap: 0.5rem;
`;
