import Routing from './Routes';

import { AuthProvider } from './context/Auth';
import { BillingFeesProvider } from './context/BillingFees';
import { ConfigProvider } from './context/Config';
import { GymGoerProvider } from './context/GymGoer';
import { MainProvider } from './context/Main';
import { PlanProvider } from './context/Plan';
import { QueryProvider } from './context/Query';

function App() {
  return (
    <ConfigProvider>
      <AuthProvider>
        <MainProvider>
          <GymGoerProvider>
            <PlanProvider>
              <BillingFeesProvider>
                <QueryProvider>
                  <Routing />
                </QueryProvider>
              </BillingFeesProvider>
            </PlanProvider>
          </GymGoerProvider>
        </MainProvider>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
