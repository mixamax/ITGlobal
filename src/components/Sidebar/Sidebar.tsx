import { Menu } from "../Menu/Menu";
import { Navigator } from "../Navigator/Navigator";

type Props = {
    isMenuVisible: boolean;
    onChangeMenuVisibility: () => void;
};

export function Sidebar({ isMenuVisible, onChangeMenuVisibility }: Props) {
    return (
        <aside className="sidebar">
            <div className="sidebar__navigator-wrapper">
                <Navigator
                    onChangeMenuVisibility={onChangeMenuVisibility}
                    isMenuVisible={isMenuVisible}
                />
            </div>

            <Menu isMenuVisible={isMenuVisible} />
        </aside>
    );
}
