import { Menu } from "../Menu/Menu";
import { Navigator } from "../Navigator/Navigator";

type Props = {
    isMenuVisible: boolean;
    isMenuPositionAbsolute: boolean;
    isShortHeader: boolean;
    onChangeMenuVisibility: () => void;
};

export function Sidebar({
    isMenuVisible,
    isMenuPositionAbsolute,
    isShortHeader,
    onChangeMenuVisibility,
}: Props) {
    return (
        <aside className="sidebar">
            {!isShortHeader && (
                <Navigator onChangeMenuVisibility={onChangeMenuVisibility} />
            )}
            <Menu
                isShortHeader={isShortHeader}
                isMenuVisible={isMenuVisible}
                isMenuPositionAbsolute={isMenuPositionAbsolute}
            />
        </aside>
    );
}
