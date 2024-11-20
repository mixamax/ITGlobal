import searchIcon from "../../assets/images/search.svg";
import calendarIcon from "../../assets/images/calendar.svg";
import closeIcon from "../../assets/images/close.svg";
import plusIcon from "../../assets/images/plus.svg";
import { Button } from "../Button/Button";

type Props = {
    title: string;
    value?: string;
    marked?: boolean;
    edit?: boolean;
    wide?: boolean;
    children?: React.ReactNode;
    searchBtn?: boolean;
    addBtn?: boolean;
    calendarBtn?: boolean;
    // closeBtn?: boolean;
};

export default function FormItem({
    title,
    marked,
    edit,
    wide,
    searchBtn,
    addBtn,
    calendarBtn,
    // closeBtn,
    children,
}: Props) {
    return (
        <div className={"form-item" + (wide ? " form-item_wide" : "")}>
            <span
                className={
                    "form-item__title" +
                    (marked ? " form-item__title_marked" : "")
                }
            >
                {title}
            </span>

            <div className="form-item__content-wrapper">
                <div className="form-item__content" contentEditable={edit}>
                    {children}
                    {!edit && (
                        <div className="form-item__close">
                            <Button
                                type="smallIcon"
                                imgSrc={closeIcon}
                                alt="иконка закрытия"
                            />
                        </div>
                    )}
                </div>

                {addBtn && (
                    <Button
                        type="largeIcon"
                        imgSrc={plusIcon}
                        alt="иконка добавления"
                        isBordered
                    />
                )}
                {searchBtn && (
                    <Button
                        type="largeIcon"
                        imgSrc={searchIcon}
                        alt="иконка поиска"
                        isBordered
                    />
                )}
                {calendarBtn && (
                    <Button
                        type="largeIcon"
                        imgSrc={calendarIcon}
                        alt="иконка календаря"
                        isBordered
                    />
                )}
            </div>
        </div>
    );
}
