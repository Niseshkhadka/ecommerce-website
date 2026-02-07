import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import Modal from './modal'

const Navbar = () => {
  const { cart } = useCart()
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  return (
    <>
      <nav className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between">
        {/* Left: Brand */}
        <Link to="/" className="text-xl font-bold text-dark">
          MyStore
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <button
            className="text-lg text-black hover:underline cursor-pointer "
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </button>

          <button
            className="text-lg text-black hover:underline cursor-pointer"
            onClick={() => setIsSignupOpen(true)}
          >
            Signup
          </button>

          <Link to="/cart" className="relative text-white text-lg">
            🛒
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-2 py-0.5 rounded-full">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </Link>
        </div>
      </nav>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        title="Login"
      >
        <form className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-3 py-2 rounded"
          />
          <button className="bg-black text-white py-2 rounded mt-2 hover:bg-gray-800">
            Login
          </button>
        </form>
      </Modal>

      {/* Signup Modal */}
      <Modal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        title="Signup"
      >
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-3 py-2 rounded"
          />
          <button className="bg-black text-white py-2 rounded mt-2 hover:bg-gray-800">
            Signup
          </button>
        </form>
      </Modal>
    </>
  )
}

export default Navbar
