'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { readLocalStorage } from '@/services/storage.services';

import dataPemissionRoutes from '@/app/dataPermission.json';



interface ProtectedRouteProps {
  children: React.ReactNode;
}
export interface UserStorage {
  islogin: boolean;
  user: {
    admins: string
  };
  token: string;
  id: number | string | null
}
// export interface user extends UserStorage {
//   admins:string
// }



const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [todo, setTodo] = useState<any>({ id: 1, isLogin: false })

  const pathname: any = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const auth: any = useSelector((state: RootState) => state.auth);
  // console.log("🚀 ~ file: ProtectedRoutes.tsx:33 ~ auth:", auth)

  // if (auth?.token?.length == 0) console.log("vacio retorna a /")

  const dataSerch: any[] = ["token", "islogin", "user", "id"]
  // const dataR = await readLocalStorage(dataSerch)


  useEffect(() => {

    const todoR = async () => {
      const data = await readLocalStorage(dataSerch)
      if (!data?.isLogin) router.push('/')
      setTodo(data)
    }
    todoR()

  }, [auth])







  useEffect(() => {
    if (todo.user && !todo?.user?.admins) router.push('/')
    // const adminJ = dataPemissionRoutes?.admin?.routes
    // const employesJ = dataPemissionRoutes?.employes?.routes
    const { admin: { routes: adminRoutes }, employes: { routes: employesRoutes } } = dataPemissionRoutes || {};


    if (adminRoutes?.includes(pathname) ) console.log("🚀 ~ file: ProtectedRoutes.tsx:77 ~ useEffect ~ pathname:", pathname,"****************",todo?.user?.admins)

    if (!employesRoutes?.includes(pathname)) console.log("****************si******************", pathname, "*******************",)




  }, [pathname])




  return <>{children}</>;
};

export default ProtectedRoute;



