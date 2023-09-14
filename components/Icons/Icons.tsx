/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import Iconf from './flama.png'
const Icons = (props: any) => {
    console.log("🚀 ~ file: Icons.tsx:6 ~ Icons ~ props:", props.logo)
    return (
        <Image
            {...props}
            // className={props.className} 
            />
    )
}

export default Icons
