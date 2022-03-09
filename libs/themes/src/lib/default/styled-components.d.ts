// Do not edit; to change theme edit theme.ts

import "styled-components";
import theme from "./theme";

type Theme = typeof theme;

declare module "styled-components" {
    export type Theme = typeof theme;
}
