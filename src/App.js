import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        {/* <Footer />*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
