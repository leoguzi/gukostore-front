import { GlobalStyle } from './globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
