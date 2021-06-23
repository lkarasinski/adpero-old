import React from 'react';
import { SiteData } from '../../utilities/interfaces/SiteState';

interface Props {
	siteData: SiteData;
	remove: (x: string) => void;
	manage: (x: string) => void;
}

export const UserList: React.FC<Props> = ({ siteData, remove, manage }) => {
	console.log(siteData);
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
									<button onClick={() => remove(user)}>
										Remove user
									</button>
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
