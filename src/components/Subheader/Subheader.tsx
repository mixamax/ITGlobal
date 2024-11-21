import { forwardRef } from "react";
import { Button } from "../Button/Button";

type Props = {
    openModal: () => void;
};

export const Subheader = forwardRef<HTMLDivElement, Props>(
    ({ openModal }, ref) => {
        return (
            <div className="subheader" ref={ref}>
                <div className="subheader__task">
                    <span className="subheader__task-title">Подзадача</span>
                    <Button
                        type="text"
                        text="Создать"
                        isBordered
                        onClick={openModal}
                    />
                </div>
                <div className="subheader__save-buttons">
                    <Button type="primary" text="Сохранить" />
                    <Button type="text" text="Сохранить и выйти" isBordered />
                </div>
            </div>
        );
    }
);
