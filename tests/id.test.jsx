import ReactDOM from 'react-dom';
import React from 'react';
import ID from '../pages/journeys/[id]';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import getMockAuthUser from './helpers/getMockAuthUser';

jest.mock('next-firebase-auth');

test('Display correct message when there is no logged in user', () => {
    const container = document.createElement('div');
    ReactDOM.render(<ID />, container);
    expect(container.textContent).toMatch(`witam mock-user-id`);
});

describe('Show user id', () => {
    beforeEach(() => {
        useAuthUser.mockReturnValue(getMockAuthUser());
        const getWrapperComponent = (wrappedComponent) => wrappedComponent;
        withAuthUser.mockImplementation(() => getWrapperComponent);
    });
    it('xd', () => {
        const container = document.createElement('div');
        ReactDOM.render(<ID />, container);
        expect(container.textContent).toMatch(`witam abcd1234`);
    });
});
