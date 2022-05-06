
import { render } from 'react-dom';
import App from "./App";
import './index.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';



// fetch('http://localhost:3001/api/products/')
//     .then(function (response) {
//         response.json().then(function (data) {
//             console.log('data', data)
//         }) 
//     })
// const fetchProducts = async (): Promise<[0]> => {
//     const data = await fetch("http://localhost:3001/api/products/");
//     const result = await data.json();
//     //console.log(result);
//     return result;
// };
//  export default fetchProducts();
//  console.log(fetchProducts());

render(
    <React.StrictMode>

        <BrowserRouter>
        <h2>Products table</h2>
        <App />
        </BrowserRouter>

    </React.StrictMode>,

    document.getElementById('root')
    )


