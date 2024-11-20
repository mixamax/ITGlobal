import { MenuFilter } from "./MenuFilter";
import { MenuList } from "./MenuList";

type Props = {
    isMenuVisible: boolean;
};

export function Menu({ isMenuVisible }: Props) {
    return (
        <div className={`menu ${!isMenuVisible ? "menu_hidden" : ""}`}>
            <MenuFilter />
            <MenuList />
        </div>
    );
}
