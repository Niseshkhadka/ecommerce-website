import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Footer from './components/footer'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        {/* Top */}
        <Navbar />

        {/* Middle (page content grows) */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        {/* Bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
