import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShelfHome from './components/Shelves/ShelfHome';
import Bins from './components/Bins/Bins';
import Inventory from './components/Inventory/Inventory';
import Add from './components/Add/Add';


//match.params --> has to match this.props.params in components
export default (
    <Switch>
        <Route component={ ShelfHome } path= '/' exact/>
        <Route component={ Bins } path = '/Bins/:shelf_id'/>
        <Route component={ Inventory } path = '/Inventory/:shelf_id/:bin_id'/>
        <Route component={ Add } path = '/Add/:shelf_id/:bin_id'/>
    </Switch>
)


// Switch renders the route that matches the path