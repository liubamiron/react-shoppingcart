import React, {useEffect, useState} from 'react';
import './App.css';
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from "./pages/Cart";
import Navigation from "./pages/Navigation";

function App() {
    return (
        <BrowserRouter>
        <div className="App">

            <Navigation />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/cart" component={Cart}/>
            </Switch>

        </div>
            </BrowserRouter>
    );
}
export default App;







