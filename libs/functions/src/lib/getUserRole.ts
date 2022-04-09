import { JourneyDataType } from "@adpero/interfaces";

export const getUserRole = (journey: JourneyDataType, userEmail: string) => {
    if (journey?.data?.author === userEmail) {
        return "Author";
    }
    if (journey?.data?.editors.includes(userEmail)) {
        return "Editor";
    }
    if (journey?.data?.users.includes(userEmail)) {
        return "Member";
    }
    return "";
};
