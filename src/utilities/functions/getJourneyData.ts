import { SiteState } from 'utilities/interfaces/SiteState';
import firebase from '../../firebase';

import { SiteData } from '../interfaces/SiteState';

interface Props {
	auth: any;
	journeysRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
	id: string;
	siteData: SiteData;
	setSiteData: React.Dispatch<React.SetStateAction<SiteData>>;
}

const getJourneyData: Function = ({
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
	console.log(auth, id);
	if (auth?.authenticated) {
		tempState.authenticated = true;
		const user = auth.user!;
		journeysRef
			.doc(id)
			.get()
			.then((doc) => {
				if (doc.exists) {
					tempState.docExists = true;
					const journeyData = doc.data();
					const tempData = siteData;
					const data = doc.data()!;
					const users = data.users;
					if (users.includes(user.email)) {
						tempState.success = true;
						tempState.hasPermission = true;
						tempState.author = data.author === user.email;
					}
					tempData.journey = journeyData;
					tempData.siteState = tempState;
					setSiteData({ ...tempData });
				}
			});
	}
};

export default getJourneyData;