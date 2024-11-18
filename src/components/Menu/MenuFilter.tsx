import imagePath from "../../assets/images/filter.svg";
import imageNoPinPath from "../../assets/images/no-pin.svg";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
export function MenuFilter() {
    return (
        <div className="menu__filter">
            <Input
                imagePath={imagePath}
                placeholder="Поиск по меню"
                alt="иконка фильтра"
            />
            <Button
                type="largeIcon"
                imgSrc={imageNoPinPath}
                alt="иконка"
                isBordered
            />
        </div>
    );
}
