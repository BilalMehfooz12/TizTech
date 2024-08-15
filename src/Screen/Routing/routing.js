import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../Component/Header/header";
import Home from "../HomeComponent/homes";
import WebDesign from "../WebDesign/webdesign";
import Animation from "../Animation/animation";
import MobileApp from "../MobieApplication/mobileApplication";
import DataScience from "../DataScience/dataScience";
import SoftwareDevelopment from "../softwareDevelopment/software";
import ContactUs from "../ContactUs/contact";
import Game from "../Game/game";
import ContentWriting from "../ContentWriting/contentwriting";
import Footer from "../../Component/Footer/footer";
function Routeing() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webDesign" element={<WebDesign />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/mobileApp" element={<MobileApp />} />
        <Route path="/dataScience" element={<DataScience />} />
        <Route path="/softwDevlopment" element={<SoftwareDevelopment />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/game" element={<Game />} />
        <Route path="/contentWriting" element={<ContentWriting />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Routeing;
