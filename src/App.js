import { GlobalStyle } from './globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path= "/product/:id" element={<Product/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
