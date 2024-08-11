import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../Component/Header/header";
import Home from "../HomeComponent/homes";
import WebDesign from "../WebDesign/webdesign";
import Animation from "../Animation/animation";
import Footer from "../../Component/Footer/footer";
function Routeing() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webDesign" element={<WebDesign />} />
        <Route path="/animation" element={<Animation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Routeing;
