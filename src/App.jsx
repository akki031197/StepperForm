import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/form/Form";
import "./App.css";
import SignIn from "./components/signIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/page" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
