import React from "react";
import "./style/app.scss"; 
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Header from "./components/Header/Header"; 
import Home from   "./components/pages/Home/Home"; 
import About from "./components/pages/About/About";
import Logement from "./components/pages/Logement/Fiche"; 
import ErrorPage from "./components/pages/ErrorPage/Error404";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>

     
            {/*  Listes des routes */}  
        <BrowserRouter>
        <Header />
        <main>

           <Routes>
            
            <Route path="/"> 

              <Route  index element={<Home />} />
              <Route path="about" element= {<About/>} /> 
              <Route path="logement" element= {<Logement/>} />
              <Route path="*" element={<ErrorPage />}/>
              
            </Route> 

          </Routes>
          </main>
          <Footer />
        </BrowserRouter> 
        
     
      </>
   
  );

}

export default App;
