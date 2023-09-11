import { crudSlice } from '@/app/GlobalRedux/Features/CRUD/crudSlice';
import { useAppDispatch, useAppSelector } from '@/app/GlobalRedux/hooks';
import React from 'react'
import { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import Cards from '../Card/Cards';
import Inputs from '../Inputs/Inputs';

const PruebaCrud = () => {
    const [data, setData] = useState([])

    const dispatch = useAppDispatch();
    // const auth = useAppSelector(selectAuth);

    const todo: any = {
        url: "http://localhost:3001/Auth/Auth",
        method: 'PUT', // Use 'GET', 'POST', 'PUT', etc. as needed
        body: data,
        idParams: null,
    }



    const onAction = async () => {
        dispatch(crudSlice(todo))
    }


    return (
        <div>
            <h1>Pruebas </h1>

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

export default PruebaCrud
