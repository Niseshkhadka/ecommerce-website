import type { products } from '@/types/product'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

/* ---------------- TYPES ---------------- */

type CartItem = products & {
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (product: products) => void
  removeFromCart: (id: number) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
}

/* ---------------- CONTEXT ---------------- */

const CartContext = createContext<CartContextType | null>(null)

/* ---------------- PROVIDER ---------------- */

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Load cart from localStorage on first render
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  /* -------- ADD TO CART -------- */
  const addToCart = (product: products) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id)

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  /* -------- REMOVE ITEM -------- */
  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  /* -------- INCREASE QTY -------- */
  const increaseQty = (id: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  /* -------- DECREASE QTY -------- */
  const decreaseQty = (id: number) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  /* -------- SAVE TO LOCAL STORAGE -------- */
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

/* ---------------- CUSTOM HOOK ---------------- */

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
