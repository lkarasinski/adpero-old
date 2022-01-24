import React from 'react';
import styled from 'styled-components';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Icon from 'components-ui/Atoms/Icon';
import Button from 'components-ui/Atoms/Button';
import Link from 'next/link';

type ButtonProps = {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
    path: string;
};

const StyledButton = styled(Button)`
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 4px ${({ theme }) => `${theme.colors.primary}80`};
`;

const EditButton: React.FC<ButtonProps> = ({ path, ...props }) => {
    return (
        <Link href={`${path}/edit`} passHref>
            <StyledButton {...props}>
                <>
                    <Icon icon={faEdit} />
                    Edit
                </>
            </StyledButton>
        </Link>
    );
};

export default EditButton;
