import { useWindowSize } from "usehooks-ts";
import { mobileScreenSize } from "@adpero/constants";
import * as React from "react";

export const useMobile = () => {
    const { width } = useWindowSize();
    const isMobile = React.useMemo(() => width <= mobileScreenSize, [width]);

    return isMobile;
};

export default useMobile;
