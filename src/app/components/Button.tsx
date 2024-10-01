// import { IconType } from "react-icons";
interface ButtonProps {
    classNames?: string,
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    // icon?: any;
    //   icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    classNames,
    label,
    onClick = () => { },
    disabled,
    outline,
    small,
    // icon: Icon
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            hover:opacity-80
            transition
            w-full
            h-full
            ${classNames}
            ${outline ? "bg-white" : "bg-primary"}
            ${outline ? "border-primary" : "border-transparent"}
            ${outline ? "text-primary" : "text-white"}
            ${small ? "py-1" : "py-3"}
            ${small ? "text-sm" : "text-md"}
            ${small ? "font-light" : "font-semibold"}
            ${small ? "border-[1px]" : "border-2"}
        `}
        >
            {/* {Icon && <Icon size={24} className='absolute left-4 top-3' />} */}
            {label}
        </button>
    );
};

export default Button;