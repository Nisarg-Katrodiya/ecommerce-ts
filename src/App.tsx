import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { routes as appRoutes } from './routes';
import NavRoutes from './components/Routes';
import Preloader from './components/Layouts/Preloader';
import { store } from './redux/store/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Preloader />
          <NavRoutes routes={appRoutes} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
