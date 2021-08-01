import React from 'react';
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth';
import Button from '../../../components/Atoms/Button';

const Journey: React.FC = () => {
    const AuthUser = useAuthUser();
    const data = AuthUser.id ?? 'stranger';

    return (
        <div>
            hello {data}
            <Button>Przycisk</Button>
        </div>
    );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Journey);
