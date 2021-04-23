import Routes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persitor, store } from './store';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persitor}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Routes/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}
