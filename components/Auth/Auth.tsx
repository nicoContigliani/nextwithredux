/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useLocation } from 'react-router-dom';
import Buttons from '../Buttons/Buttons';
import Inputs from '../Inputs/Inputs';
import Cards from '../Card/Cards';
import { useAppDispatch, useAppSelector } from '@/app/GlobalRedux/hooks';
import { authAsync, selectAuth } from '@/app/GlobalRedux/Features/auth/authSlice';
import styles from './Auth.module.css'; // Importa los estilos CSS


const Auths = () => {
    const [data, setData] = useState([])

    const dispatch = useAppDispatch();
    const auth = useAppSelector(selectAuth);
    const onAction = async () => {
        dispatch(authAsync(data))
    }

    return (
        <div className={styles.body}>
            <div className="login__content">

                <Cards
                    className='login__form'
                    textLavel={'prueba'}
                    src={''}
                    variant={'top'}
                    title={'Tomá por Mirón'}        >

                    <div className="login__inputs">

                        <Inputs
                            className='login__input'
                            autocomplete=''
                            data={data}
                            setData={setData}
                            placeholder="mail"
                            name="mail"
                            type={''}
                            minlength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />

                        <Inputs
                            className='login__input'
                            data={data}
                            setData={setData}
                            placeholder="Password"
                            name="password"
                            type="password"
                            minlength={''} autoFocus={false} color={''} defaultValue={undefined} disabled={false} fullWidth={false} id={''} inputComponent={undefined} multiline={false} label={''} rows={''} />
                    </div>



                    <div className="login__buttons">
                        <Buttons
                            textLavel="todo"
                            id="todo"
                            className='login__button'
                            onClick={() => onAction()}
                        />


                    </div>

                </Cards>
            </div>

        </div>
    )
}

export default Auths
