type Props = {
    imagePath: string;
    placeholder: string;
    alt: string;
    specClass?: string;
};

export default function Input({
    imagePath,
    placeholder,
    alt,
    specClass,
}: Props) {
    return (
        <div className={`input-wrapper ${specClass ? specClass : ""}`}>
            <input className="input" placeholder={placeholder} />
            <img src={imagePath} alt={alt} width={16}></img>
        </div>
    );
}
