import imagePath from "../../assets/images/filter.svg";
import imageNoPinPath from "../../assets/images/no-pin.svg";
import { Button } from "../Button/Button";
export function MenuFilter() {
    return (
        <div className="menu__filter">
            <div className="menu__input-field">
                <input className="menu__input" placeholder="Поиск по меню" />
                <img
                    className="menu__input-img"
                    src={imagePath}
                    alt="иконка фильтра"
                    width={16}
                ></img>
            </div>
            <Button
                type="largeIcon"
                imgSrc={imageNoPinPath}
                alt="иконка"
                isBordered
            />
        </div>
    );
}
