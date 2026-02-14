import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { useCart } from '../../contexts/CartContext'
import { useWishlist } from '../../contexts/WishlistContext'
import { formatCurrency, calculateDiscount } from '../../utils/helpers'

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart()
  const { isInWishlist, toggleWishlist } = useWishlist()
  const discount = calculateDiscount(product.originalPrice, product.price)

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
    toast.success('Added to cart!', {
      icon: '🛍️',
      style: {
        borderRadius: '8px',
        background: '#1a1a1a',
        color: '#fff',
      },
    })
  }

  const handleToggleWishlist = (e) => {
    e.preventDefault()
    toggleWishlist(product)
    if (!isInWishlist(product.id)) {
      toast.success('Added to wishlist!', {
        icon: '❤️',
        style: {
          borderRadius: '8px',
          background: '#a88b5f',
          color: '#fff',
        },
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/product/${product.id}`} className="group product-card block">
        <div className="card-luxury h-full flex flex-col">
          {/* Image */}
          <div className="relative overflow-hidden aspect-square bg-gray-100">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
           
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.newArrival && (
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="px-3 py-1 bg-gray-900 text-white text-xs font-medium tracking-wider uppercase"
                >
                  New
                </motion.span>
              )}
              {discount > 0 && (
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="px-3 py-1 bg-royal-600 text-white text-xs font-medium tracking-wider uppercase"
                >
                  -{discount}%
                </motion.span>
              )}
            </div>

            {/* Quick View */}
            <motion.div
              className="absolute top-4 right-4 flex flex-col gap-2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <motion.button
                onClick={handleToggleWishlist}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isInWishlist(product.id)
                    ? 'bg-royal-600 text-white'
                    : 'bg-white/90 text-gray-700 hover:bg-royal-600 hover:text-white'
                }`}
              >
                <Heart size={18} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/90 text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-300"
                onClick={(e) => e.preventDefault()}
              >
                <Eye size={18} />
              </motion.button>
            </motion.div>

            {/* Quick Add */}
            <motion.div
              className="absolute bottom-0 left-0 right-0"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={handleAddToCart}
                whileHover={{ backgroundColor: '#6f5a3d' }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gray-900 text-white font-medium text-sm tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <ShoppingBag size={16} />
                Quick Add
              </motion.button>
            </motion.div>
          </div>

          {/* Info */}
          <div className="p-5 flex flex-col flex-grow">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs tracking-widest uppercase text-royal-600 font-medium mb-2"
            >
              {product.category}
            </motion.p>
           
            <motion.h3
              className="font-display text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-royal-700 transition-colors"
              whileHover={{ x: 4 }}
            >
              {product.name}
            </motion.h3>
           
            {product.rating && (
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Star
                        size={14}
                        className={i < Math.floor(product.rating) ? 'fill-champagne-500 text-champagne-500' : 'text-gray-300'}
                      />
                    </motion.div>
                  ))}
                </div>
                <span className="text-xs text-gray-600">({product.reviews})</span>
              </div>
            )}

            <div className="mt-auto flex items-center gap-2">
              <motion.span
                className="font-display text-xl font-bold text-gray-900"
                whileHover={{ scale: 1.05 }}
              >
                {formatCurrency(product.price)}
              </motion.span>
              {product.originalPrice && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-gray-500 line-through"
                >
                  {formatCurrency(product.originalPrice)}
                </motion.span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard