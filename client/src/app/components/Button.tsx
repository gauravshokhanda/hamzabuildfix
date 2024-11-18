"use client";
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
    // Check if a custom text color class is already present
    const isCustomTextColor = classNames?.includes('text-');
    const bgColor = classNames?.includes('bg-')

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
            ${isCustomTextColor ? '' : 'text-white'} // Default to white if no custom color is present
            ${outline ? "bg-white" : ""} // Default primary color
            ${outline ? "border-primary" : "border-transparent"}
            ${small ? "py-1" : "py-3"}
            ${small ? "text-sm" : "text-md"}
            ${small ? "font-light" : "font-semibold"}
            ${small ? "border-[1px]" : "border-2"}
            ${bgColor ? '' : 'bg-primary'}
            ${classNames}  // Ensure custom classes come last to override defaults
        `}
        >
            {label}
        </button>
    );
};

export default Button;