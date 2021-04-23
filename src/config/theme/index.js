import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale' ;

import 'typeface-roboto';

export default createMuiTheme(
    {
        palette: {
            primary: {
                main: '#F57F45',
                light: '#e99a72',
                dark: '#f15b0f'
            }
        }
    },
    ptBR
);
