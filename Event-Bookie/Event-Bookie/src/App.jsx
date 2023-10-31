import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import LoginPage from './LoginPage.jsx'
import Home from './Home.jsx'



function App() {
  
    return(
        <BrowserRouter>
        <>
        <Header/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* 
        <Route path="/sports" component={SportsPage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/shows" component={ShowsPage} />
        <Route path="/tickets" component={AccountPage} />
    */}
        <Route path="/LoginPage" element={<LoginPage/>} />
        </Routes>
        
        <Footer/>
        </>
        </BrowserRouter>
    );
  
}

export default App
