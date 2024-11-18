import { Menu } from "../Menu/Menu";
import { Navigator } from "../Navigator/Navigator";

type Props = {
    onChangeMenuVisibility: () => void;
};

export function Sidebar({ onChangeMenuVisibility }: Props) {
    return (
        <div className="sidebar">
            <Navigator onChangeMenuVisibility={onChangeMenuVisibility} />
            <Menu />
        </div>
    );
}
