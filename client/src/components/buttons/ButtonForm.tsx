import React from 'react';

interface ButtonFormProps {
    type: "submit" | "button" | "reset" | undefined,
    children: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean
}

const ButtonForm: React.FC<ButtonFormProps> = ({ type, onClick, children, disabled }) => {
    return (
        <button type={type} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonForm;
