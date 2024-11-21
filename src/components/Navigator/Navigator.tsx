import { SidebarBtn } from "../SidebarBtn/SidebarBtn";
import starPath from "../../assets/images/star.svg";

type Props = {
    onChangeMenuVisibility: () => void;
    isMenuVisible: boolean;
};

export function Navigator({ onChangeMenuVisibility, isMenuVisible }: Props) {
    return (
        <div className="navigator">
            <SidebarBtn
                size="lg"
                onChangeMenuVisibility={onChangeMenuVisibility}
                isMenuVisible={isMenuVisible}
            />
            <div className="navigator__item">
                <img width={24} height={24} src={starPath} alt="звездочка" />
            </div>
        </div>
    );
}
