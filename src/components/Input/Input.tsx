type Props = {
    imagePath: string;
    placeholder: string;
    alt: string;
};

export default function Input({ imagePath, placeholder, alt }: Props) {
    return (
        <div className="input-wrapper">
            <input className="input" placeholder={placeholder} />
            <img src={imagePath} alt={alt} width={16}></img>
        </div>
    );
}
