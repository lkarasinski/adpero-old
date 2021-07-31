import ID from '../pages/journeys/[id]/index';
import ReactDOM from 'react-dom';
import React from 'react';
import { test } from '@jest/globals';

test('label', () => {
    const container = document.createElement('div');
    ReactDOM.render(<ID />, container);
    expect(container.textContent).toMatch(`witam nico`);
});
