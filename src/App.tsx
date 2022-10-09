import { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppRouter } from './components/AppRouter';

export const App: FC = () => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
           <AppRouter />
          </BrowserRouter>
        </Suspense>
      </Provider>
    </PersistGate>
  );
};
