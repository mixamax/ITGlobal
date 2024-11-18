import logoPath from "../../assets/images/Logo.png";
import searchIconPath from "../../assets/images/search.svg";
import Input from "../Input/Input";
import avatarPath from "../../assets/images/avatar.png";
import settingsIconPath from "../../assets/images/settings.svg";
import { Button } from "../Button/Button";

const name = "Максим Галактионов";

export function Header() {
    return (
        <header className="header">
            <img width={174} height={24} src={logoPath} alt="логотип" />
            <div className="header__info">
                <Input
                    imagePath={searchIconPath}
                    placeholder="Поиск"
                    alt="иконка поиска"
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
