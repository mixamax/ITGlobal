import { MenuFilter } from "./MenuFilter";

type Props = {
    isMenuVisible: boolean;
    isMenuPositionAbsolute: boolean;
    isShortHeader: boolean;
};

export function Menu({
    isMenuVisible,
    isMenuPositionAbsolute,
    isShortHeader,
}: Props) {
    return (
        <div
            className={`menu ${!isMenuVisible ? "menu_hidden" : ""} ${
                isMenuPositionAbsolute ? "menu_absolute" : ""
            } ${isShortHeader ? "menu_left0" : ""}`}
        >
            <MenuFilter />
        </div>
    );
}
