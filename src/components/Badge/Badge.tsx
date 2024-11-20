import closeIcon from "../../assets/images/big-close.svg";

type Props = {
    children: React.ReactNode;
    withClose?: boolean;
};

export function Badge({ children, withClose }: Props) {
    return (
        <div className="badge">
            <span>{children}</span>
            {withClose && (
                <button>
                    <img
                        src={closeIcon}
                        width={10}
                        height={10}
                        alt="иконка крестик"
                    />
                </button>
            )}
        </div>
    );
}
