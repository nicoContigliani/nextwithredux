import React from 'react'

const Buttons = (props: any) => {
    return (
        <button {...props}>{props.children}</button>
    )
}

export default Buttons
