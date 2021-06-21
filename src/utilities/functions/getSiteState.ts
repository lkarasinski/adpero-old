import { SiteState } from 'utilities/interfaces/SiteState';
import firebase from '../../firebase';

import { SiteData } from '../interfaces/SiteState';

interface Props {
	auth: any;
	journeysRef: firebase.firestore.CollectionReference<
		firebase.firestore.DocumentData
	>;
	id: string;
	siteData: SiteData;
	setSiteData: React.Dispatch<React.SetStateAction<SiteData>>;
}

const getSiteState: Function = ({
	auth,
	journeysRef,
	id,
	siteData,
	setSiteData,
}: Props) => {
	const tempState: SiteState = {
		authenticated: false,
		docExists: false,
		hasPermission: false,
		author: false,
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
				const data = doc.data()!;
				const users = data.users;
				if (user) {
					if (users.includes(user)) {
						delete tempState.errorMessage;
						tempState.success = true;
						tempState.hasPermission = true;
						tempState.author = data.author === user;
					}
					tempData.siteState = tempState;
					setSiteData({ ...tempData });
				}
			}
		});
};

export default getSiteState;
