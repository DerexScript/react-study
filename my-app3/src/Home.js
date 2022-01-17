import React from "react";
import AppProvider from './context'

function Home(){
    return (
        <div>
            <AppProvider></AppProvider>
        </div>
    );
}

export default Home;