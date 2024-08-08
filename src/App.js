import React from "react";
import "./style/app.scss"; 
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Header from "./components/Header/Header"; 
import Home from   "./components/pages/Home/Home"; 
import About from "./components/pages/About/About";
import ErrorPage from "./components/pages/ErrorPage/Error404";
import Footer from "./components/Footer/Footer";
import Fiche from "./components/pages/Logement/Fiche";

function App() {
  return (
    <>

     
      {/*  Listes des routes */}  
      <BrowserRouter>

        <Header /> 
        <main>

          <Routes> 
            {/* Contient toutes les routes configurés dans le site*/}

            <Route path="/"> 

              <Route  index element={<Home />} />
              <Route path="about" element= {<About/>} /> 
              {/* /: id est une route spécifique qu'on récupère dans le fiche de logement
               pour afficher les informations correspondantes */}
              <Route path="logement/:id" element= {<Fiche/>} />  
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
