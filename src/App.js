import { GlobalStyle } from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
