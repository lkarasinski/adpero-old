import Heading from 'components-ui/Atoms/Heading';
import PageTransitionAnimation from 'components-ui/Atoms/PageTransitionAnimation';
import type { NextPage } from 'next';

const Polls: NextPage = () => {
    return (
        <PageTransitionAnimation>
            <Heading>Your Polls</Heading>
        </PageTransitionAnimation>
    );
};

export default Polls;
