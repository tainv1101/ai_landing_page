import React from "react";

import {Footer, Blog, Features, WhatGPT, Header, Possibility} from './containers'
import {CTA, Brand, Navbar} from './components'
import './App.css'

function App() {
    return ( 
      <div className="App" >

        <div className="gradient__bg" >
            <Navbar/>
            <Header/>
        </div>

        <Brand/>
        <WhatGPT/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>

       </div>
     );
}

export default App;