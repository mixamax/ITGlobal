import { SidebarBtn } from "../SidebarBtn/SidebarBtn";

type Props = {
    onChangeMenuVisibility: () => void;
};

export function Navigator({ onChangeMenuVisibility }: Props) {
    return (
        <div className="navigator">
            <SidebarBtn
                size="lg"
                onChangeMenuVisibility={onChangeMenuVisibility}
            />
        </div>
    );
}
