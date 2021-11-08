import { useLayoutEffect, useState } from "react";

type setLoaded = null | ((value: boolean) => void);

const useWindowWidth = (setLoaded?: setLoaded): [number, boolean] => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    const handleWidthChange = () => {
        setWindowWidth(window.innerWidth);
    };

    useLayoutEffect(() => {
        handleWidthChange();
        window.addEventListener("resize", () => handleWidthChange());
        if (setLoaded) {
            setLoaded(true);
        }
        setLoading(false);
        return window.removeEventListener("resize", () => handleWidthChange());
    }, []);

    return [windowWidth, loading];
};
export default useWindowWidth;
