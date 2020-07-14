import React from 'react';
import ReactDOM from 'react-dom';
import querystring from 'querystring'

import App from './App';


const Index = () => {
    let query = querystring.parse(global.location.search);
    let port = JSON.parse(query['?port'])
    window.APIPORT = port;
    return <>
        <App />
    </>
}


ReactDOM.render(<Index />,document.getElementById('root'));