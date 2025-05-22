import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import carousel from "./components/cariusek";
import Carousel from "./components/cariusek";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/game" element={<Carousel></Carousel>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
