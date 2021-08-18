import ReactDOM from 'react-dom';
import React from 'react';
import Layout from '../components/Templates/Layout';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

describe('Layout', () => {
    const container = document.createElement('div');
    const Element = (
        <ThemeProvider theme={theme}>
            <Layout>
                <div>a</div>
                <div>b</div>
            </Layout>
        </ThemeProvider>
    );
    ReactDOM.render(Element, container);

    it('Displays correct amount of children', () => {
        expect(container.children.length).toBe(2);
    });
});
