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
import PruebaCrud from '@/components/pruebaCrud/PruebaCrud';


export default function Home() {
  const [data, setData] = useState({})
  const [isLogins, setIsLogins] = useState(false)

  const [] = useState()

  const dispatch = useAppDispatch();
  const router = useRouter()

  const auth = useAppSelector(selectAuth);
  console.log("🚀 ~ file: page.tsx:37 ~ Home ~ auth:", auth)
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

  
      {
        isLogins ? <PruebaCrud/> : <Auth />
      }
     <div className="row">
      <div className="col-2">si</div>
      <div className="col-2">
        
      </div>
     </div>


    </main>
  );
}
