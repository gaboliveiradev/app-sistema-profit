import Routing from './Routes';

import { AuthProvider } from './context/Auth';
import { GymGoerProvider } from './context/GymGoer';
import { MainProvider } from './context/Main';
import { PlanProvider } from './context/Plan';

function App() {
  return (
    <AuthProvider>
      <MainProvider>
        <GymGoerProvider>
          <PlanProvider>
            <Routing />
          </PlanProvider>
        </GymGoerProvider>
      </MainProvider>
    </AuthProvider>
  );
}

export default App;
