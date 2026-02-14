import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Filter } from 'lucide-react'
import ProductCard from '../components/product/ProductCard'
import { products, categories } from '../data/products'
import { filterProducts, sortProducts } from '../utils/helpers'

const Shop = () => {
  const { category } = useParams()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    category: category || '',
    minPrice: '',
    maxPrice: '',
    inStock: false
  })
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    window.scrollTo(0, 0)
    const categoryData = categories.find(c => c.id === category)
    document.title = categoryData ? `${categoryData.name} | Liora Gifts` : 'Shop | Liora Gifts'
  }, [category])

  useEffect(() => {
    if (category) {
      setFilters(prev => ({ ...prev, category }))
    }
  }, [category])

  useEffect(() => {
    let result = filterProducts(products, filters)
    result = sortProducts(result, sortBy)
    setFilteredProducts(result)
  }, [filters, sortBy])

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const categoryData = categories.find(cat => cat.id === category)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-12">
          <h1 className="heading-primary mb-4">
            {categoryData ? categoryData.name : 'All Products'}
          </h1>
          {categoryData && <p className="text-lg text-gray-600">{categoryData.description}</p>}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 bg-white rounded-sm shadow-elegant p-6">
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-6">
                Filters
              </h3>

              <div className="space-y-6">
                {!category && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Category
                    </label>
                    <select
                      value={filters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="input-luxury text-sm"
                    >
                      <option value="">All Categories</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                      className="input-luxury text-sm w-1/2"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                      className="input-luxury text-sm w-1/2"
                    />
                  </div>
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                    className="w-4 h-4 text-royal-600 border-gray-300 rounded focus:ring-royal-500"
                  />
                  <span className="text-sm text-gray-700">In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden btn-secondary py-2 px-4 text-xs flex items-center gap-2"
                >
                  <Filter size={16} />
                  Filters
                </button>
                <p className="text-gray-600">
                  <span className="font-semibold">{filteredProducts.length}</span> products
                </p>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-luxury text-sm w-full sm:w-auto"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop