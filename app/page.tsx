/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import styles from './page.module.css';

import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './GlobalRedux/Features/counter/counterSlice';
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

export default function Home() {
  const [] = useState()

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const storedTodo = readLocalStorage();
  useEffect(() => {
    async function fetchData() {
      const AxiosG: any = await useAxios({
        url: "http://localhost:3001/Auth/Auth",
        method: 'PUT', // Use 'GET', 'POST', 'PUT', etc. as needed
        body: {
          "email": "nico.contigliani@gmail.com",
          "password": "123456789"
        },
        idParams: null,
      });

      const todo = await formaterDataAuth(AxiosG)
      console.log("🚀 ~ file: page.tsx:34 ~ fetchData ~ todo:", todo)


      // setTodo(storedTodo);
      return AxiosG
    }

    fetchData();
  }, [storedTodo]);

  // const data = true
  // const si = canPass(data)




  const router = useRouter()


  return (
    <main className={styles.main}>
      {/* <button type="button" onClick={() => router.push('/about')}>
        Dashboard
      </button>
      <h1>Home</h1>


      <button
        className={styles.button}
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        className={styles.button}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch(incrementByAmount(2))}
      >
        Increment by 2
      </button>
 */}


  




    </main>
  );
}
