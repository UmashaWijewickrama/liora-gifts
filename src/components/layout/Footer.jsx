import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-champagne-400 mb-4">
              Liora Gifts
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Curating timeless luxury accessories for the discerning woman.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-champagne-600 text-gray-100 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-champagne-600 text-gray-100 rounded-full transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-champagne-600 text-gray-100 rounded-full transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-lg font-semibold text-champagne-400 mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop/jewelry" className="text-gray-300 hover:text-champagne-400 transition-colors text-sm">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop/handbags" className="text-gray-300 hover:text-champagne-400 transition-colors text-sm">
                  Handbags
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-champagne-400 transition-colors text-sm">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-champagne-400 mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>umshsara2019@gmail.com</li>
              <li>+94 (77) 825-4285</li>
              <li>Kurunegala,<br />Sri Lanka.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Liora Gifts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer