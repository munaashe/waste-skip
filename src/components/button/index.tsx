import React from "react";

const Button = ({
    children,
    onClick,
    className = "",
}: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}) => {
    return (
        <button
            onClick={onClick}
            className={`${className} bg-white text-black border border-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition-colors duration-300`}
        >
            {children}
        </button>
    );
};

export default Button;