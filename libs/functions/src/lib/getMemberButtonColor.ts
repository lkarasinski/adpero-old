import { dashboardTheme } from "@adpero/themes";

export const getMemberButtonColor = (participant: string) => {
    switch (participant) {
        case "Member":
            return dashboardTheme.colors.primary.light;
        case "Author":
            return dashboardTheme.colors.primary.regular;
        case "Editor":
            return dashboardTheme.colors.green.regular;
    }
    return "gray";
};
