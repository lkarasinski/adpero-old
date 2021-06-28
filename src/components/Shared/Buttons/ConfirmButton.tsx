import React from 'react';
// import { RouteComponentProps } from 'react-router-dom';

interface Props {
	onSuccess: () => void;
	text: string;
	size?: string;
	push?: () => void;
}

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ConfirmButton: React.FC<Props & ButtonType> = ({
	onSuccess,
	text,
	push,
}) => {
	const [clickCount, setClickCount] = React.useState(0);
	const [message, setMessage] = React.useState(text);
	React.useEffect(() => {
		if (clickCount === 2) {
			setMessage(text);
			setClickCount(0);
			onSuccess();
			if (push) {
				push();
			}
		}
		if (clickCount === 1) {
			setMessage('Are you sure?');
		}
	}, [clickCount]);
	return (
		<button onClick={() => setClickCount(clickCount + 1)}>{message}</button>
	);
};
