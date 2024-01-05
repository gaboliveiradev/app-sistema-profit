import { useAuthContext } from './context/Auth';

export const ProtectedRoutes = ({ children }) => {
  const { signed } = useAuthContext();

  if (signed) {
    return children
  }
}