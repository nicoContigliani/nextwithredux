import React from 'react'

const Buttons = ({
    textLavel,
    children,
    className,
    onClick
}: any) => {
    return (
        <button className={className}
        onClick={onClick}
        >
            {children ? children : textLavel}
        </button>
    )
}

export default Buttons
