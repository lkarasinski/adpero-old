import { ConfirmButton } from '@components/Shared/Buttons/ConfirmButton';
import React from 'react';
import { SiteData } from '@utils/interfaces/SiteState';

interface Props {
	siteData: SiteData;
	remove: (x: string) => void;
	manage: (x: string) => void;
}

/**
 * Renders a user list where every user has two buttons used to manage their
 * @param siteData - siteData
 * @param remove - function that removes a user from the journey.users array
 * @param manage - function that grants or revokes editor access from a user
 */
export const UserList: React.FC<Props> = ({ siteData, remove, manage }) => {
	const usersWithoutAuthor = siteData?.journey?.users.filter(
		(x: string) => x !== siteData?.journey?.author
	);

	return (
		<>
			<p>Users in journey: </p>
			<br />
			<ul>
				<li>{siteData?.journey?.author} 👑</li>
				{usersWithoutAuthor?.map((user: string) => {
					const isEditor = siteData?.journey?.editors.includes(user);
					const author = siteData?.siteState?.author;
					return (
						<li key={user}>
							{user} {isEditor ? '🖊' : null}
							{author ? (
								<>
									<ConfirmButton
										onSuccess={() => remove(user)}
										text="Remove user"
									/>
									<button onClick={() => manage(user)}>
										{isEditor
											? 'Remove editor access'
											: 'Give editor access'}
									</button>
								</>
							) : null}
						</li>
					);
				})}
			</ul>
		</>
	);
};
