import Routing from './Routes';

import { AuthProvider } from './context/Auth';
import { CardFeesProvider } from './context/CardFees';
import { GymGoerProvider } from './context/GymGoer';
import { MainProvider } from './context/Main';
import { PlanProvider } from './context/Plan';

function App() {
  return (
    <AuthProvider>
      <MainProvider>
        <GymGoerProvider>
          <PlanProvider>
            <CardFeesProvider>
              <Routing />
            </CardFeesProvider>
          </PlanProvider>
        </GymGoerProvider>
      </MainProvider>
    </AuthProvider>
  );
}

export default App;
