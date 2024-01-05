import Routing from './Routes';
import { AuthProvider } from './context/Auth';
import { MainProvider } from './context/Main';

function App() {
  return (
    <AuthProvider>
      <MainProvider>
        <Routing />
      </MainProvider>
    </AuthProvider>
  );
}

export default App;
