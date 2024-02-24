import Routing from './Routes';

import { AuthProvider } from './context/Auth';
import { BillingFeesProvider } from './context/BillingFees';
import { ConfigProvider } from './context/Config';
import { GymGoerProvider } from './context/GymGoer';
import { MainProvider } from './context/Main';
import { PlanProvider } from './context/Plan';

function App() {
  return (
    <ConfigProvider>
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
    </ConfigProvider>
  );
}

export default App;
