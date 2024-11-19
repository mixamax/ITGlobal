import logoPath from "../../assets/images/Logo.png";
import searchIconPath from "../../assets/images/search.svg";
import Input from "../Input/Input";
import avatarPath from "../../assets/images/avatar.png";
import settingsIconPath from "../../assets/images/settings.svg";
import { Button } from "../Button/Button";
import { SidebarBtn } from "../SidebarBtn/SidebarBtn";

const name = "Максим Галактионов";

type Props = {
    onChangeMenuVisibility: () => void;
    isMenuVisible: boolean;
};

export function Header({ onChangeMenuVisibility, isMenuVisible }: Props) {
    return (
        <header className="header">
            <img
                className="header__logo"
                width={174}
                height={24}
                src={logoPath}
                alt="логотип"
            />
            <div className="header__btn-wrapper">
                <SidebarBtn
                    size="sm"
                    onChangeMenuVisibility={onChangeMenuVisibility}
                    isMenuVisible={isMenuVisible}
                />
            </div>

            <div className="header__info">
                <Input
                    imagePath={searchIconPath}
                    placeholder="Поиск"
                    alt="иконка поиска"
                    specClass="header__info_input"
                />
                <div className="user-info">
                    <img width={32} height={32} src={avatarPath}></img>
                    <span className="user-info__name">{name}</span>
                </div>
                <Button
                    type="largeIcon"
                    imgSrc={settingsIconPath}
                    alt="иконка шестеренки"
                    isBordered
                />
            </div>
        </header>
    );
}
