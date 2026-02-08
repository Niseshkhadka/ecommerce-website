import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart()

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500">
        Your cart is empty
      </div>
    )
  }

  return (
    <div className="p-6 md:p-10">
      <h1 className="mb-6 text-2xl font-semibold">Your Cart</h1>

      <div className="space-y-6">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded border p-4 shadow-sm"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-20 w-20 object-contain rounded bg-gray-100"
            />

            {/* Product Info */}
            <div className="flex-1">
              <h2 className="font-medium">{item.name}</h2>
              <p className="text-sm text-gray-600">${item.price}</p>

              <div className="mt-2 flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 py-1 border rounded"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-sm text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
