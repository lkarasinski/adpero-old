import React from 'react';

interface Props {
    onSuccess: () => void;
    text: string;
}

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;
/**
 * withRouter components that will call a function on second click
 * @param onSuccess - Function executed after second click
 * @param text - Text displayed before clicking
 */
export const ConfirmButton: React.FC<Props & ButtonType> = ({
    onSuccess,
    text,
}) => {
    const [clickCount, setClickCount] = React.useState(0);
    const [message, setMessage] = React.useState(text);
    React.useEffect(() => {
        if (clickCount === 2) {
            setMessage(text);
            setClickCount(0);
            onSuccess();
        }
        if (clickCount === 1) {
            setMessage('Are you sure?');
        }
    }, [clickCount]);
    return (
        <button onClick={() => setClickCount(clickCount + 1)}>{message}</button>
    );
};
