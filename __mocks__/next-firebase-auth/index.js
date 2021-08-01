const withAuthUser = jest.fn(() => (wrappedComponent) => wrappedComponent);

const getMockAuthUser = () => ({
    id: 'mock-user-id',
    email: 'mockUser@example.com',
    emailVerified: true,
    getIdToken: jest.fn(async () => 'mock-id-token'),
    clientInitialized: true,
    firebaseUser: {},
    signOut: jest.fn(),
    serialize: jest.fn(() => ({})),
});

const withAuthUserTokenSSR = jest.fn(
    () => (getServerSidePropsFunc) => (ctx) => getServerSidePropsFunc(ctx)
);

module.exports = {
    init: jest.fn(),
    withAuthUser,
    useAuthUser: jest.fn(() => getMockAuthUser()),
    withAuthUserTokenSSR,
    AuthAction: {
        RENDER: 'render',
        SHOW_LOADER: 'showLoader',
        RETURN_NULL: 'returnNull',
        REDIRECT_TO_LOGIN: 'redirectToLogin',
        REDIRECT_TO_APP: 'redirectToApp',
    },
};
