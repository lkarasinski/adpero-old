import React, { useState } from "react";
import useEventListener from "./useEventListener";

interface WindowSize {
    width: number;
    height: number;
}

function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    });

    const effect =
        typeof document !== "undefined"
            ? React.useLayoutEffect
            : React.useEffect;

    const handleSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEventListener("resize", handleSize);

    // Set size at the first client-side load
    effect(() => {
        handleSize();
    }, []);

    return windowSize;
}

export default useWindowSize;
