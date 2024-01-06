import { useAuthContext } from './context/Auth';

const ProtectedRoutes = ({ children }) => {
  const { signed } = useAuthContext();

  if (signed) {
    return children
  }
}

export default ProtectedRoutes;