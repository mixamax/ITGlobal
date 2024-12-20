import { useState, useEffect } from "react";

export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const isMenuVisibleInit = width > 991;

    useEffect(() => {
        const handleResize = () => {
            if (window) {
                setWidth(window.innerWidth);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { isMenuVisibleInit };
};
