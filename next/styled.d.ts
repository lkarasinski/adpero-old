import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: string;
        font: string;

        colors: {
            primary: string;
            gray: {
                dark: string;
                light: string;
            };
            red: string;
            green: string;
            shadow: string;
            selection: string;
            background: string;
        };
    }
}
