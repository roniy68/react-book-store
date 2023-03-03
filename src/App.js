import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Navbar';
import Nav from './components/Header';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route element={<Nav />}>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
