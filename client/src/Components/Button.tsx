import React from 'react'

interface ButtonProps {
    content?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({ content = 'click', onClick  }) => {
    return (
        <button>
            { content }
        </button>
    )
}
