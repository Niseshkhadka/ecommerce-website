import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Footer from './components/footer';

function App() {
  return (
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/cart" element={<Cart />} />
<Route path="/" element={<Home/>}/>
</Routes>
<Footer/>
</BrowserRouter>
  )
};
export default App;