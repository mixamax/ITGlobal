import { MenuFilter } from "./MenuFilter";

type Props = {
    isMenuVisible: boolean;
};

export function Menu({ isMenuVisible }: Props) {
    return (
        <div className={`menu ${!isMenuVisible ? "menu_hidden" : ""}`}>
            <MenuFilter />
        </div>
    );
}
