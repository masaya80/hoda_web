import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Hochan from "./pages/Hochan";
import Contact from "./pages/Contact";
import {normalize} from "@testing-library/jest-dom/dist/utils";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Main/>}/>
          <Route path={`/about/`} element={<About/>}/>
          <Route path={`/hochan/`} element={<Hochan/>}/>
          <Route path={`/contact/`} element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
