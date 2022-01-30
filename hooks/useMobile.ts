import useWindowSize from "hooks/useWindowWidth";
import * as React from "react";

const useMobile = () => {
    const { width } = useWindowSize();
    const isMobile = React.useMemo(() => width < 731, [width]);

    return isMobile;
};

export default useMobile;
