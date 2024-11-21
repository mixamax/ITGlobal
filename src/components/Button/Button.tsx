type Props = {
    type: "text" | "primary" | "smallIcon" | "largeIcon";
    wide?: boolean;
    isBordered?: boolean;
    imgSrc?: string;
    alt?: string;
    text?: string;
    onClick?: () => void;
};

export function Button({
    type,
    wide,
    isBordered,
    imgSrc,
    text,
    alt,
    onClick,
}: Props) {
    let imgWidth = 20;
    if (type === "smallIcon") {
        imgWidth = 16;
    }
    return (
        <button
            className={`button button_${type} ${
                isBordered && "button_bordered"
            } ${wide && "button_wide"}`}
            onClick={onClick}
        >
            {imgSrc && (
                <img
                    width={imgWidth}
                    height={imgWidth}
                    src={imgSrc}
                    alt={alt}
                />
            )}
            {text && text}
        </button>
    );
}
