import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // const router = useRouter();

  // useEffect(() => {
  //   // Verifica si el usuario está autenticado
  //   const isAuthenticated = true;

  //   if (!isAuthenticated) {
  //     // Redirige a la página de inicio de sesión si no está autenticado
  //     router.push('/');
  //   }
  // }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
