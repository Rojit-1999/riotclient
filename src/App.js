import logo from "./logo.svg";
import "./App.css";
import Pages from "./Component/Pages";
import Signout from "./Component/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./Component/Setting";

function App() {
  return (
    // <div>
    //   <Pages />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signout />} />
        {/* <Route path="signout" element={<Signout />} /> */}
        <Route path="Back" element={<Pages />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;