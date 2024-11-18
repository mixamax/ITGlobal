import { Sidebar } from "../Sidebar/Sidebar";
import { useResize } from "../../hooks/useResize";
import { useEffect, useState } from "react";
import { SidebarBtn } from "../SidebarBtn/SidebarBtn";
import { Header } from "../Header/Header";

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

    return (
        <div className="layout">
            <Header />
            {/* <header>
                {isShortHeader && (
                    <SidebarBtn
                        size="sm"
                        onChangeMenuVisibility={handleChangeMenuVisibility}
                    />
                )}
            </header> */}
            <div className="wrapper">
                <Sidebar
                    isShortHeader={isShortHeader}
                    isMenuVisible={isMenuVisible}
                    isMenuPositionAbsolute={isMenuPositionAbsolute}
                    onChangeMenuVisibility={handleChangeMenuVisibility}
                />

                <main></main>
            </div>
        </div>
    );
}
