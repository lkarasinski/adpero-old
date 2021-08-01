// Create a mock FirebaseUser instance with the fields that you use.
const mockFirebaseUser = {
    displayName: 'Banana Manana',
    // ... other fields from firebaseUser that you may use
};

/**
 * Build and return a dummy AuthUser instance to use in tests.
 *
 * @arg {boolean} isLoggedIn - Pass `false` to mimic a logged out user.
 * @returns {AuthUserContext} - A mocked AuthUser instance, with 'serialize' added.
 */
const getMockAuthUser = (isLoggedIn = true) => ({
    id: isLoggedIn ? 'abcd1234' : null,
    email: isLoggedIn ? 'banana@banana.com' : null,
    emailVerified: isLoggedIn,
    getIdToken: jest.fn(async () => (isLoggedIn ? 'i_am_a_token' : null)),
    clientInitialized: isLoggedIn,
    firebaseUser: isLoggedIn ? mockFirebaseUser : null,
    signOut: jest.fn(),
    serialize: jest.fn(() => 'serialized_auth_user'),
});

export default getMockAuthUser;
