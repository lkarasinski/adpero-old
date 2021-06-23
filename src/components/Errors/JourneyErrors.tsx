import { ErrorMessage } from 'components/Text decoration/ErrorMessage';
import React from 'react';
import { SiteState } from 'utilities/interfaces/SiteState';
import firebase from '../../firebase';

interface Props {
	siteState: SiteState;
	userAuth: firebase.User | undefined | null;
}

export const JourneyErrors: React.FC<Props> = ({ siteState, userAuth }) => {
	if (!userAuth) {
		return (
			<ErrorMessage>You need to login to access this page.</ErrorMessage>
		);
	}
	if (!siteState.docExists) {
		return (
			<ErrorMessage>
				This journey does not exist. Make sure that you have the correct
				link!
			</ErrorMessage>
		);
	}
	if (!siteState.hasPermission) {
		return (
			<ErrorMessage>
				You don&apost have permission to access this page.
			</ErrorMessage>
		);
	}
	return null;
};
