import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Heart, Menu, X } from 'lucide-react'
import { useCart } from '../../contexts/CartContext'
import { useWishlist } from '../../contexts/WishlistContext'
// Using the .jpg for the logo mark
import logoMark from '../../assets/logo.jpg' 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getCartCount } = useCart()
  const { wishlistItems } = useWishlist()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/shop/jewelry', label: 'Jewelry' },
    { to: '/shop/handbags', label: 'Handbags' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-[#F9F3E9] py-5' 
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-full bg-white p-1 shadow-sm border border-gray-100">
              <img 
                src={logoMark} 
                alt="Liora Icon" 
                className={`transition-all duration-500 object-cover ${
                  isScrolled ? 'h-10 w-10' : 'h-14 w-14'
                }`}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-xl md:text-2xl font-light tracking-widest text-gray-900 leading-none">
                LIORA GIFTS
              </h1>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-light mt-1">
                whisper of you
              </span>
            </div>
          </Link>

          {/* Desktop Nav - High-end Spacing */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[11px] tracking-[0.25em] uppercase transition-all duration-300 relative group ${
                    isActive ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-gray-900 transition-all duration-300 ${
                  'group-hover:w-full w-0'
                }`}></span>
              </NavLink>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link to="/wishlist" className="relative p-2 text-gray-700 hover:scale-110 transition-transform">
              <Heart size={20} strokeWidth={1.5} />
              {wishlistItems.length > 0 && (
                <span className="absolute top-1 right-1 bg-red-400 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative p-2 text-gray-700 hover:scale-110 transition-transform">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {getCartCount() > 0 && (
                <span className="absolute top-1 right-1 bg-gray-900 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-900"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
      }`}>
        <nav className="flex flex-col items-center py-12 space-y-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm tracking-[0.3em] uppercase text-gray-800 hover:text-gray-500"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header