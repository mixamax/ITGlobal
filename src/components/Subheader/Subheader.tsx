import { Button } from "../Button/Button";

export function Subheader() {
    return (
        <div className="subheader">
            <div className="subheader__task">
                <span className="subheader__task-title">Подзадача</span>
                <Button type="text" text="Создать" isBordered />
            </div>
            <div className="subheader__save-buttons">
                <Button type="primary" text="Сохранить" />
                <Button type="text" text="Сохранить и выйти" isBordered />
            </div>
        </div>
    );
}
