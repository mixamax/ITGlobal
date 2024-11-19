import { Sidebar } from "../Sidebar/Sidebar";
import { useResize } from "../../hooks/useResize";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";

export function Layout() {
    const { isMenuVisibleInit } = useResize();

    const [isMenuVisible, setIsMenuVisible] = useState(() => isMenuVisibleInit);
    console.log(isMenuVisible);

    useEffect(() => {
        setIsMenuVisible(isMenuVisibleInit);
    }, [isMenuVisibleInit]);

    const handleChangeMenuVisibility = () => {
        setIsMenuVisible((s) => !s);
    };

    return (
        <div className="layout">
            <Header
                onChangeMenuVisibility={handleChangeMenuVisibility}
                isMenuVisible={isMenuVisible}
            />
            <div className="layout__aside-and-main-wrapper">
                <Sidebar
                    isMenuVisible={isMenuVisible}
                    onChangeMenuVisibility={handleChangeMenuVisibility}
                />

                <main></main>
            </div>
        </div>
    );
}
