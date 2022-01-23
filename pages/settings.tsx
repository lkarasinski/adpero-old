import Heading from 'components-ui/Atoms/Heading';
import PageTransitionAnimation from 'components-ui/Atoms/PageTransitionAnimation';
import LogInButton from 'components/LogInButton';
import type { NextPage } from 'next';

const Settings: NextPage = () => {
    return (
        <PageTransitionAnimation>
            <Heading>Settings</Heading>
            <LogInButton />
        </PageTransitionAnimation>
    );
};

export default Settings;
