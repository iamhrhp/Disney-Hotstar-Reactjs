import { Provider } from 'react-redux';
import './App.css';
import RoutesPageMain from './Components/Routes/RoutesPageMain';
import { ThemeProvider, createTheme } from '@mui/material';
import { store } from './Components/Utils/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

function App() {
  const theme = createTheme({});
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <RoutesPageMain />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
