import ReactDOM from 'react-dom';
import React from 'react';
import JourneyCard from '../components/Molecules/JourneyCard';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

describe('JourneyCard', () => {
    const labelValue = 'Poznań';
    const elementsValue = ['Apartament', 'Transport'];

    const container = document.createElement('div');
    const Element = (
        <ThemeProvider theme={theme}>
            (
            <JourneyCard label={labelValue} elements={elementsValue} isBig />
        </ThemeProvider>
    );
    ReactDOM.render(Element, container);
    const card = container.children[0];

    it('Display label correctly', () => {
        const label = card.children[0];
        expect(label.textContent).toBe(labelValue);
    });

    it('Display correct amount of elements', () => {
        const elements = card.children[1];
        expect(elements.children.length).toBe(elementsValue.length);
    });

    test.each(elementsValue)(
        'Display correct elements values',
        (elementValue) => {
            const elements = card.children[1];
            expect(elements.textContent).toMatch(elementValue);
        }
    );
});
