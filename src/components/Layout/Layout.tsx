import { Sidebar } from "../Sidebar/Sidebar";
import { useResize } from "../../hooks/useResize";
import { useEffect, useState } from "react";

export function Layout() {
    const { isMenuVisibleInit, isMenuPositionAbsolute, isShortHeader } =
        useResize();
    const [isMenuVisible, setIsMenuVisible] = useState(() => isMenuVisibleInit);
    console.log(isMenuVisible);
    useEffect(() => {
        setIsMenuVisible(isMenuVisibleInit);
    }, [isMenuVisibleInit]);

    const handleChangeMenuVisibility = () => {
        setIsMenuVisible((s) => !s);
    };

    // console.log(isMenuVisibleInit, isMenuPositionAbsolute);
    return (
        <div
            className={`${
                isMenuVisible ? "layout" : "layout layout_hide-menu"
            }`}
        >
            <header></header>
            <aside>
                <Sidebar
                    onChangeMenuVisibility={handleChangeMenuVisibility}
                    // isMenuPositionAbsolute={isMenuPositionAbsolute}
                />
            </aside>
            <main></main>
        </div>
    );
}
