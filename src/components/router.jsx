import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
function CreateRouter(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path="/pages/About" element = {<About />} />
                    <Route path="/pages/Contact" element = {<Contact />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default CreateRouter