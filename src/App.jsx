import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Aboutus from "./pages/Aboutus.jsx";

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/contact/" element={<Contact />} />
              <Route path="/aboutus/" element={<Aboutus />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>  
  );
}

export default App