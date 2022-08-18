import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Footer from "./Components/Footer";

function App() {
  return <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:type" element={<Details />}></Route>
      </Routes>
      <Footer />
    </Router>
  </div>;
}

export default App;
