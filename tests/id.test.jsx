import ReactDOM from 'react-dom';
import React from 'react';
import ID from '../pages/journeys/[id]';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import getMockAuthUser from './helpers/getMockAuthUser';

jest.mock('next-firebase-auth');

describe('Handle not authenticated user', () => {
    beforeEach(() => {
        useAuthUser.mockReturnValue(getMockAuthUser(false));
        const getWrapperComponent = (wrappedComponent) => wrappedComponent;
        withAuthUser.mockImplementation(() => getWrapperComponent);
    });
    it('Show unknown user message', () => {
        const container = document.createElement('div');
        ReactDOM.render(<ID />, container);
        expect(container.textContent).toMatch(`hello stranger`);
    });
});

describe('Handle logged in user', () => {
    beforeEach(() => {
        useAuthUser.mockReturnValue(getMockAuthUser());
        const getWrapperComponent = (wrappedComponent) => wrappedComponent;
        withAuthUser.mockImplementation(() => getWrapperComponent);
    });
    it("Show logged in user's name", () => {
        const container = document.createElement('div');
        ReactDOM.render(<ID />, container);
        expect(container.textContent).toMatch(`hello user`);
    });
});
