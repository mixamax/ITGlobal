import { useState } from "react";

type Props = {
    size: "lg" | "sm";
    onChangeMenuVisibility: () => void;
};

const lgD =
    "M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 5C4 4.44772 4.44772 4 5 4H8V20H5C4.44772 20 4 19.5523 4 19V5ZM10 20V4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H10Z";
const smD =
    "M4.16667 18.3333C2.78595 18.3333 1.66667 17.214 1.66667 15.8333V4.16667C1.66667 2.78595 2.78595 1.66667 4.16667 1.66667H15.8333C17.214 1.66667 18.3333 2.78595 18.3333 4.16667V15.8333C18.3333 17.214 17.214 18.3333 15.8333 18.3333H4.16667ZM3.33333 4.16667C3.33333 3.70643 3.70643 3.33333 4.16667 3.33333H6.66667V16.6667H4.16667C3.70643 16.6667 3.33333 16.2936 3.33333 15.8333V4.16667ZM8.33333 16.6667V3.33333H15.8333C16.2936 3.33333 16.6667 3.70643 16.6667 4.16667V15.8333C16.6667 16.2936 16.2936 16.6667 15.8333 16.6667H8.33333Z";

export function SidebarBtn({ size, onChangeMenuVisibility }: Props) {
    const [isActive, setIsActive] = useState(false);

    let width = size === "lg" ? "24" : "20";
    let fill = isActive ? "#005999" : "#2E3238";
    let d = size === "lg" ? lgD : smD;

    const handleChangeMenuVisibility = () => {
        setIsActive((s) => !s);
        onChangeMenuVisibility();
    };

    return (
        <button
            className={`sidebar__btn sidebar__btn_${size}`}
            onClick={handleChangeMenuVisibility}
        >
            <svg
                width={width}
                height={width}
                viewBox={`0 0 ${width} ${width}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fillRule="evenodd" clipRule="evenodd" d={d} fill={fill} />
            </svg>
        </button>
    );
}
