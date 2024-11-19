import { SidebarBtn } from "../SidebarBtn/SidebarBtn";

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
        </div>
    );
}
