import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            primary: string;
            gray: {
                dark: string;
                light: string;
            };
            main: string;
            secondary: string;
        };
    }
}
