import { useEffect, useState } from "react";

type setLoaded = null | ((value: boolean) => void);

const useWindowWidth = (setLoaded?: setLoaded): number => {
    const [windowWidth, setWindowWidth] = useState(0);

    const handleWidthChange = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        handleWidthChange();
        window.addEventListener("resize", () => handleWidthChange());
        if (setLoaded) {
            setLoaded(true);
        }
        return window.removeEventListener("resize", () => handleWidthChange());
    }, []);

    return windowWidth;
};
export default useWindowWidth;
