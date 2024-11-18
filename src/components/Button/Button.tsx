type Props = {
    type: "text" | "primary" | "smallIcon" | "largeIcon";
    isBordered?: boolean;
    imgSrc?: string;
    alt?: string;
    text?: string;
    onClick?: () => void;
};

export function Button({
    type,
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
            className={`button button__${type} ${
                isBordered && "button__bordered"
            }`}
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
