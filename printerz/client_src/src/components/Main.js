import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Create routes
import Printers from './Printers';
import About from './About';
import PrinterDetails from './PrinterDetails';
import AddPrinter from './AddPrinter';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Printers} />
            <Route exact path='/about' component={About} />
            <Route exact path='/addPrinter' component={AddPrinter}/>
            <Route exact path='/printers/:id' component={PrinterDetails} />
        </Switch>
    </main>
)

export default Main;