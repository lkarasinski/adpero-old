import firebase from '../../firebase';

export interface SiteState {
	authenticated: boolean;
	docExists: boolean;
	hasPermission: boolean;
	success: boolean;
	author: boolean;
	errorMessage?: string;
}

export interface SiteData {
	siteState: SiteState;
	journey?: firebase.firestore.DocumentData;
}
