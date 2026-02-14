import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Heart, ShoppingBag, Star, Check } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { useWishlist } from '../contexts/WishlistContext'
import ProductCard from '../components/product/ProductCard'
import { products } from '../data/products'
import { formatCurrency, calculateDiscount } from '../utils/helpers'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addToCart } = useCart()
  const { isInWishlist, toggleWishlist } = useWishlist()
 
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (product) {
      document.title = `${product.name} | Élégante`
    }
  }, [id, product])

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading-secondary mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  const discount = calculateDiscount(product.originalPrice, product.price)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 3000)
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-royal-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-royal-600 transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/shop/${product.category}`} className="hover:text-royal-600 transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="aspect-square rounded-sm overflow-hidden bg-gray-100 shadow-elegant">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-xs tracking-widest uppercase text-royal-600 font-medium">
                {product.category}
              </span>
              {product.newArrival && (
                <span className="px-3 py-1 bg-gray-900 text-white text-xs font-medium tracking-wider uppercase">
                  New Arrival
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            {product.rating && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(product.rating) ? 'fill-champagne-500 text-champagne-500' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
              </div>
            )}

            <div className="flex items-center gap-4">
              <span className="font-display text-4xl font-bold text-gray-900">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    {formatCurrency(product.originalPrice)}
                  </span>
                  <span className="px-3 py-1 bg-royal-600 text-white text-sm font-medium">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            <div className="h-px bg-gray-300"></div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {product.details && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Details:</h3>
                <ul className="space-y-1">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={16} className="text-royal-600 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                {product.inStock && (
                  <span className="flex items-center gap-2 text-sm text-green-600">
                    <Check size={16} />
                    In Stock
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 btn-primary flex items-center justify-center"
              >
                <ShoppingBag size={20} className="mr-2" />
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-4 border-2 transition-all duration-300 rounded-sm ${
                  isInWishlist(product.id)
                    ? 'border-royal-600 bg-royal-600 text-white'
                    : 'border-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
                aria-label="Toggle wishlist"
              >
                <Heart size={24} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="heading-secondary mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail