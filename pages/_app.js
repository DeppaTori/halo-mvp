import React from 'react';
import App from 'next/app';
import store from './../redux/store';
import {Provider} from 'react-redux';


// function MyApp({ Component, pageProps }) {
//     return (
//         <Provider store={store}>
//             <Component {...pageProps} />
//         </Provider>
        
//     )
    
// }

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Provider store={store} ><Component {...pageProps} /></Provider>
    }
}

export default MyApp;