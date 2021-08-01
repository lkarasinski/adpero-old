import PollsPanel from 'components/Organisms/PollsPanel';
import React from 'react';
import Layout from '../components/Templates/Layout';

export default function Home() {
    const Polls = [
        {
            journeyName: 'Poznań',
            detail: 'Apartament',
        },
        {
            journeyName: 'Poznań',
            detail: 'Apartament',
        },
        {
            journeyName: 'Poznań',
            detail: 'Apartament',
        },
        {
            journeyName: 'Poznań',
            detail: 'Apartament',
        },
        {
            journeyName: 'Poznań',
            detail: 'Apartament',
        },
        {
            journeyName: 'Poznań',
            detail: 'Apartament',
        },
    ];
    return (
        <Layout>
            <PollsPanel polls={Polls}></PollsPanel>
        </Layout>
    );
}
