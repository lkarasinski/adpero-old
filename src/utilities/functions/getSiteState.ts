import { SiteState } from 'utilities/interfaces/SiteState';
import firebase from '../../firebase';

import { SiteData } from '../interfaces/SiteState';

interface Props {
	auth: firebase.User | null | undefined;
	journeysRef: firebase.firestore.CollectionReference<
		firebase.firestore.DocumentData
	>;
	id: string;
	siteData: SiteData;
	setSiteData: React.Dispatch<React.SetStateAction<SiteData>>;
}

const getSiteState = ({
	auth,
	journeysRef,
	id,
	siteData,
	setSiteData,
}: Props): void => {
	const tempState: SiteState = {
		authenticated: false,
		docExists: false,
		hasPermission: false,
		author: false,
		editor: false,
		success: false,
	};
	if (auth) {
		tempState.authenticated = true;
	}

	const user = auth?.email;
	journeysRef
		.doc(id)
		.get()
		.then((doc) => {
			if (doc.exists) {
				tempState.docExists = true;
				const tempData = siteData;
				const data = doc.data();
				const users = data?.users;
				if (user) {
					if (users.includes(user)) {
						delete tempState.errorMessage;
						if (data?.editors.includes(user)) {
							tempState.editor = true;
						}
						tempState.success = true;
						tempState.hasPermission = true;
						tempState.author = data?.author === user;
					}
					tempData.siteState = tempState;
					setSiteData({ ...tempData });
				}
			}
		});
	return;
};

export default getSiteState;
