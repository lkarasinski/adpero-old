import firebase from 'firebase';
import React from 'react';
import { Link } from 'react-router-dom';
import {
	CostsContainer,
	DescriptionContainer,
	DetailHeading,
	DetailsContainer,
	JourneyHeading,
	UsersContainer,
	Wrapper,
	DetailDescription,
	DetailListElement,
	GoButton,
} from './styledComponents';
interface Props {
	data: firebase.firestore.DocumentData;
}

/**
 * Brief description of the journey referenced in the docs. Displayed on the JourneyList
 * @param data - firebase journey document snapshot data
 */
const JourneyPanel: React.FC<Props> = ({ data }) => {
	return (
		<Wrapper>
			<div>
				<JourneyHeading>{data.data().name}</JourneyHeading>
				<DetailsContainer>
					<DescriptionContainer>
						<DetailHeading>Description</DetailHeading>
						<DetailDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ratione earum aspernatur ea iste sit magnam
							iure culpa quos reprehenderit recusandae.
						</DetailDescription>
					</DescriptionContainer>
					<CostsContainer>
						<DetailHeading>Costs</DetailHeading>
						<ul>
							<DetailListElement>Test@mail.com</DetailListElement>
							<DetailListElement>Test@mail.com</DetailListElement>
						</ul>
					</CostsContainer>
					<UsersContainer>
						<DetailHeading>Users</DetailHeading>
						<ul>
							{data
								.data()
								.users.map((user: string, id: number) => (
									<DetailListElement key={id}>
										{user.split('@')[0]}
									</DetailListElement>
								))}
						</ul>
					</UsersContainer>
				</DetailsContainer>
				<Link to={`/journeys/${data.ref.id}`}>
					<GoButton>
						<svg
							width="13"
							height="22"
							viewBox="0 0 13 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 19.0325L7.85785 11L0 2.9675L2.41912 0.5L12.7132 11L2.41912 21.5L0 19.0325Z"
								fill="white"
							/>
						</svg>
					</GoButton>
				</Link>
			</div>
		</Wrapper>
	);
};

export default JourneyPanel;
