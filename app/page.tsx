/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import styles from './page.module.css';

import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './GlobalRedux/Features/counter/counterSlice';
import { readLocalStorage } from '@/services/storage.services';
import { useEffect } from 'react';
import useAxios from '@/services/useAxios.services';
import { Method } from 'axios';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const storedTodo = await readLocalStorage();
      const AxiosG = await useAxios({
        url: "https://pokeapi.co/api/v2/pokemon/",
        method: 'GET', // Use 'GET', 'POST', 'PUT', etc. as needed
        body: null,
        idParams: null,
      });
      console.log("🚀 ~ file: page.tsx:27 ~ fetchData ~ AxiosG:", AxiosG)

      // setTodo(storedTodo);
    }

    fetchData();
  }, []);


  return (
    <main className={styles.main}>
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
    </main>
  );
}
