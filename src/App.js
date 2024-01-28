import Routing from './Routes';

import { AuthProvider } from './context/Auth';
import { MainProvider } from './context/Main';
import { PlanProvider } from './context/Plan';

function App() {
  return (
    <AuthProvider>
      <MainProvider>
        <PlanProvider>
          <Routing />
        </PlanProvider>
      </MainProvider>
    </AuthProvider>
  );
}

export default App;
