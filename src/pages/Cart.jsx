import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { formatCurrency } from '../utils/helpers'
import { useEffect } from 'react'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Shopping Cart | Élégante'
  }, [])

  const subtotal = getCartTotal()
  const shipping = subtotal > 1000 ? 0 : 50
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md">
          <ShoppingBag size={80} className="mx-auto text-gray-400 mb-6" />
          <h2 className="heading-secondary mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">
            Discover our curated collection of luxury accessories.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between mb-12">
          <h1 className="heading-primary">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-sm text-royal-600 hover:text-royal-700 underline"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-sm shadow-elegant p-6 flex flex-col sm:flex-row gap-6"
              >
                <Link
                  to={`/product/${item.id}`}
                  className="flex-shrink-0 w-full sm:w-32 h-32 bg-gray-100 rounded-sm overflow-hidden group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1 min-w-0 pr-4">
                      <Link
                        to={`/product/${item.id}`}
                        className="font-display text-lg font-semibold text-gray-900 hover:text-royal-600 transition-colors line-clamp-2"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-600 mt-1 capitalize">{item.category}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-red-600 transition-colors flex-shrink-0"
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-4">
                    <div className="flex items-center border-2 border-gray-300 rounded-sm">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-display text-2xl font-bold text-gray-900">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-sm text-gray-600">
                          {formatCurrency(item.price)} each
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-royal-600 hover:text-royal-700 font-medium transition-colors"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-sm shadow-elegant p-8 sticky top-24">
              <h2 className="font-display text-2xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      formatCurrency(shipping)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-medium">{formatCurrency(tax)}</span>
                </div>

                <div className="h-px bg-gray-300"></div>

                <div className="flex justify-between items-center">
                  <span className="font-display text-xl font-semibold text-gray-900">
                    Total
                  </span>
                  <span className="font-display text-2xl font-bold text-gray-900">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              {shipping > 0 && (
                <div className="mb-6 p-4 bg-champagne-50 rounded-sm border border-champagne-200">
                  <p className="text-sm text-gray-700">
                    Add <span className="font-semibold">{formatCurrency(1000 - subtotal)}</span> more for FREE SHIPPING
                  </p>
                </div>
              )}

              <button className="w-full btn-primary mb-4">
                Proceed to Checkout
              </button>

              <div className="text-center text-xs text-gray-600 space-y-1">
                <p>Secure checkout • SSL encrypted</p>
                <p>30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart