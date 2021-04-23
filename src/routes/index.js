import { BrowserRouter, Switch } from 'react-router-dom';
import Scraps from '../pages/Scraps';
import Home from '../pages/Home';

import Route from './RouteWrapper';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Scraps}/>
                <Route path="/scraps/:id" exact component={Home}/>
                <Route path="/login" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    ); 
}