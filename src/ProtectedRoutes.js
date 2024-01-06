import { useAuthContext } from './context/Auth';
import Login from './pages/Login';

const ProtectedRoutes = ({ children }) => {
  const { signed } = useAuthContext();

  if (signed) {
    return children
  } else {
    return <Login />
  }
}

export default ProtectedRoutes;