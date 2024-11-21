import { Button } from "../Button/Button";
import Form from "../Form/Form";
import btnIcon from "../../assets/images/big-close.svg";

type Props = {
    onClose: () => void;
};

export function Modal({ onClose }: Props) {
    const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleCloseModal}>
            <div className="modal__content-wrapper">
                <ModalHeader onClose={onClose} />
                <Form />
                <div className="modal__footer-buttons mobile">
                    <Button
                        type="primary"
                        text="Сохранить"
                        onClick={onClose}
                        wide
                    />
                    <Button
                        type="text"
                        text="Отменить"
                        isBordered
                        onClick={onClose}
                        wide
                    />
                </div>
            </div>
        </div>
    );
}

function ModalHeader({ onClose }: Props) {
    return (
        <div className="modal__header">
            <span className="modal__task-title">Подзадача</span>
            <div className="modal__buttons desktop">
                <Button type="primary" text="Сохранить" onClick={onClose} />
                <Button
                    type="text"
                    text="Отменить"
                    isBordered
                    onClick={onClose}
                />
            </div>
            <div className="modal__buttons mobile">
                <Button
                    type="largeIcon"
                    imgSrc={btnIcon}
                    onClick={onClose}
                    isBordered
                />
            </div>
        </div>
    );
}
