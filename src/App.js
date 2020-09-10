import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Home from './pages/home'
import Conocimientos from './pages/conocimientos'
import Proyectos from './pages/proyectos'
import Contacto from './pages/contacto'

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/conocimientos' component={Conocimientos}/>
            <Route exact path='/proyectos' component={Proyectos}/>
            <Route exact path='/contacto' component={Contacto}/>
            <Route component={Home}/>
        </Switch>
    );
}

export default App;

