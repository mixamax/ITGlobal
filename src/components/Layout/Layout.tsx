import { Sidebar } from "../Sidebar/Sidebar";
import { useResize } from "../../hooks/useResize";
import { useEffect, useRef, useState } from "react";
import { Header } from "../Header/Header";
import { Subheader } from "../Subheader/Subheader";
import { Content } from "../Content/Content";

export function Layout() {
    const { isMenuVisibleInit } = useResize();
    const mainRef = useRef<HTMLElement>(null);
    const subheaderRef = useRef<HTMLDivElement>(null);
    const [isMenuVisible, setIsMenuVisible] = useState(() => isMenuVisibleInit);

    const handleChangeMenuVisibility = () => {
        setIsMenuVisible((s) => !s);
    };

    useEffect(() => {
        setIsMenuVisible(isMenuVisibleInit);
    }, [isMenuVisibleInit]);

    useEffect(() => {
        const element = mainRef.current;
        const subheader = subheaderRef.current;

        if (element && subheader) {
            element.onscroll = () => {
                if (element.scrollTop > 0) {
                    subheader.classList.add("subheader_scroll");
                } else {
                    subheader.classList.remove("subheader_scroll");
                }
            };
        }
        return () => {
            if (element) {
                element.onscroll = null;
            }
        };
    }, []);

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

                <main ref={mainRef}>
                    <Subheader ref={subheaderRef} />
                    <Content />
                </main>
            </div>
        </div>
    );
}
