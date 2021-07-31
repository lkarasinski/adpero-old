import React from 'react';
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth';

const Journey: React.FC = () => {
    const AuthUser = useAuthUser();
    const data = AuthUser.id ?? 'nico';

    return <div>witam {data}</div>;
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Journey);
