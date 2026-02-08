import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import Modal from './modal'

const Navbar = () => {
  const { cart } = useCart()
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md text-black">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold ">
          MyStore
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-6 text-xl text-black">
          <button
            onClick={() => setLoginOpen(true)}
            className="hover:underline "
          >
            Login
          </button>

          <button
            onClick={() => setSignupOpen(true)}
            className="hover:underline"
          >
            Signup
          </button>

          <Link to="/cart" className="relative">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* LOGIN MODAL */}
      <Modal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        title="Login"
      >
        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/40"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/40"
          />

          <button className="mt-2 rounded-lg bg-black py-3 text-sm text-white hover:bg-gray-800 transition">
            Login
          </button>

         
        </form>
      </Modal>

      {/* SIGNUP MODAL */}
      <Modal
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
        title="Create Account"
      >
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/40"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/40"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/40"
          />

          <button className="mt-2 rounded-lg bg-black py-3 text-sm text-white hover:bg-gray-800 transition">
            Create account
          </button>

       
        </form>
      </Modal>
    </>
  )
}

export default Navbar
