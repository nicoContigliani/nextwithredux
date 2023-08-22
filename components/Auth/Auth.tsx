/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useLocation } from 'react-router-dom';


const Auth = () => {
    const [dataURL, setDataURL] = useState()


    useEffect(() => {
        unpdateUrlPage()
    }, [dataURL])
    const unpdateUrlPage = () => {
        let URLactual: any = window?.location?.href;
        console.log(URLactual);
        setDataURL(URLactual)
    }

    const router = useRouter()

    const handlechange = () => {
        router.push("/about");

    }

    return (
        <div>
            {/* <button name="todo" onClick={handlechange} >hola</button> */}
        </div>
    )
}

export default Auth
