import './App.css';
import Routing from './Routes';
import { AuthProvider } from './context/Auth';

function App() {
  return (
    <AuthProvider>
      <Routing />
    </AuthProvider>
  );
}

export default App;
