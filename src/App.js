import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Japan from "./components/Japan";
import Places from "./components/Places";
import Folklore from "./components/Folklore";
import Cuisines from "./components/Cuisines";
import Cultures from "./components/Cultures";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/japan" element={<Japan />}></Route>
        <Route path="/places" element={<Places />}></Route>
        <Route path="/folklore" element={<Folklore />}></Route>
        <Route path="/cuisines" element={<Cuisines />}></Route>
        <Route path="/cultures" element={<Cultures />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;