import Routing from './Routes';

import { AuthProvider } from './context/Auth';
import { BillingFeesProvider } from './context/BillingFees';
import { GymGoerProvider } from './context/GymGoer';
import { MainProvider } from './context/Main';
import { PlanProvider } from './context/Plan';

function App() {
  return (
    <AuthProvider>
      <MainProvider>
        <GymGoerProvider>
          <PlanProvider>
            <BillingFeesProvider>
              <Routing />
            </BillingFeesProvider>
          </PlanProvider>
        </GymGoerProvider>
      </MainProvider>
    </AuthProvider>
  );
}

export default App;
