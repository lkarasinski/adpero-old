import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { dashboardTheme } from "@adpero/themes";

const themes = [dashboardTheme];

addDecorator(withThemesProvider(themes), ThemeProvider);
