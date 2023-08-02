import NavBar from "../src/Component/NavBar"
import './App.css';
import toast, { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/ChatBot";
import JsConverter from "./pages/JsConverter";
import ScifiImage from "./pages/ScifiImage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/paragraph" element={<Paragraph />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/jsconverter" element={<JsConverter />} />
        <Route path="/scifi-image" element={<ScifiImage />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>

    </div>
  );
}

export default App;
