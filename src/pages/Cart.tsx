import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, removeFromCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
      </div>
    )
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-4">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded"
          >
            {/* Left side */}
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600">
                ${item.price} × {item.quantity}
              </p>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right font-bold text-xl">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  )
}

export default Cart
