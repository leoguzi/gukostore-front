import { GlobalStyle } from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
//import UserContext from "./contexts/UserContext/js";
import React from "react";

function App() {
  //const [userData, setUserData] = useState("");

  //useEffect(() => {
  //const loginUser = JSON.parse(localStorage.getItem("loginUser"));
  //if (loginUser) {
  //setUserData(loginUser);
  // }
  // }, []);

  return (
    //<UserContext.Provider value={{ userData, setUserData }}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
    //</UserContext.Provider>
  );
}
export default App;
