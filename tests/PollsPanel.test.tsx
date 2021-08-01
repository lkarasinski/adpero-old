import ReactDOM from 'react-dom';
import React from 'react';
import PollsPanel from '../components/Organisms/PollsPanel';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

describe('PollsPanel', () => {
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

    it('Show correct amount of panels in the grid', () => {
        const container = document.createElement('div');
        const Element = (
            <ThemeProvider theme={theme}>
                (<PollsPanel polls={Polls} />
            </ThemeProvider>
        );
        ReactDOM.render(Element, container);
        const panel = container.children[0].children[1];
        expect(panel.children.length).toBe(Polls.length);
    });
});
