'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { readLocalStorage } from '@/services/storage.services';

import dataPemissionRoutes from '@/app/dataPermissionRoutes.json';
import { authAsync, preloadAuthData } from './GlobalRedux/Features/auth/authSlice';



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


  const dataSerch: any[] = ["token", "islogin", "user", "id"]
  // const dataR = await readLocalStorage(dataSerch)

  useEffect(() => {
    dispatch(preloadAuthData());
  }, [dispatch]);



  useEffect(() => {

    const todoR = async () => {
      const data = await readLocalStorage(dataSerch)
      if (!data?.isLogin) router.push('/')
      // if (data?.isLogin && !auth.isLogin) dispatch(authAsync(data))
        setTodo(data)
    }
    todoR()

  }, [auth])







  useEffect(() => {
    const { admin: { routes: adminRoutes }, employes: { routes: employesRoutes } } = dataPemissionRoutes || {};


    if (todo?.user?.admins && adminRoutes?.includes(pathname)) console.log("🚀 ~ file: ProtectedRoutes.tsx:68 ~ useEffect ~ pathname:", pathname, "*********************admin*******************************")

    if (!todo?.user?.admins && !employesRoutes?.includes(pathname)) router.push('/')


  }, [pathname])




  return <>{children}</>;
};

export default ProtectedRoute;



