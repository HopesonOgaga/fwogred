import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import carousel from "./components/cariusek";
import Carousel from "./components/cariusek";
import FwogMap from "./components/fowgmap";
import TokenomicsSection from "./components/token";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/game" element={<Carousel></Carousel>}></Route>
        <Route path="/map" element={<FwogMap></FwogMap>}></Route>
        <Route path="/token" element={<TokenomicsSection></TokenomicsSection>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
