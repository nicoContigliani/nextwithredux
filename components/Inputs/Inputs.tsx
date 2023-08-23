import React from 'react'
import { IInputs } from './IInput'

const Inputs = (props: IInputs | any) => {


    const { data, setData } = props
    const handlechange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    return (
        <input
            {...props}
            onChange={handlechange}
        />

    )
}

export default Inputs
