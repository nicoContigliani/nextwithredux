/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import styles from './page.module.css';

import { RootState } from './GlobalRedux/store';

import { useSelector, useDispatch } from 'react-redux';
import { readLocalStorage } from '@/services/storage.services';
import { useEffect, useState } from 'react';

import useAxios from '@/services/useAxios.services';

import { Method } from 'axios';
import { useRouter } from 'next/navigation';
import { formaterDataAuth } from '@/services/formaterDataAuth.services';
import { canPass } from '@/services/protectionRoutes.services';
import Auth from '@/components/Auth/Auth';
import Cards from '@/components/Card/Cards';
import Inputs from '@/components/Inputs/Inputs';

import { authAsync, selectAuth } from './GlobalRedux/Features/auth/authSlice'
import { useAppDispatch, useAppSelector } from './GlobalRedux/hooks';
import Buttons from '@/components/Buttons/Buttons';


export default function Home() {
  const [data, setData] = useState({})
  const [isLogins, setIsLogins] = useState(false)

  const [] = useState()

  const dispatch = useAppDispatch();
  const router = useRouter()

  const auth = useAppSelector(selectAuth);
  const dataSearch: any[] = ["token", "islogin", "user", "id"]


  // useEffect(() => {
  //   if (auth.islogin) setIsLogins(true)
  //   if (!auth.islogin) setIsLogins(false)

  // }, [auth])




  // useEffect(() => {

  //   const todoR = async () => {
  //     const datas = await readLocalStorage(dataSerch)
  //     if (datas && datas.isLogin)  console.log("🚀 ~ file: page.tsx:54 ~ todoR ~ datas && datas.isLogin:", datas && datas.isLogin)

  //   }
  //   todoR()

  // }, [auth])


  useEffect(() => {
    const todoR = async () => {
      const datas = await readLocalStorage(dataSearch);
      if (datas && datas.islogin) { // Asegúrate de verificar correctamente la propiedad
        setIsLogins(true);
      } else {
        setIsLogins(false);
      }
    };

    todoR();
  }, [auth]);



  const onAction = async () => {
    // alert("si")
    dispatch(authAsync(data))
  }





  return (
    <main className={styles.main}>

      {/* <div className="login__content">

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
      </div> */}

      {
        isLogins ? <h1>Hola que tal</h1> : <Auth />
      }


    </main>
  );
}
