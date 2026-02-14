export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export const calculateDiscount = (original, current) => {
  if (!original || original === current) return 0
  return Math.round(((original - current) / original) * 100)
}

export const filterProducts = (products, filters) => {
  return products.filter(product => {
    if (filters.category && product.category !== filters.category) return false
    if (filters.minPrice && product.price < filters.minPrice) return false
    if (filters.maxPrice && product.price > filters.maxPrice) return false
    if (filters.inStock && !product.inStock) return false
    return true
  })
}

export const sortProducts = (products, sortBy) => {
  const sorted = [...products]
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price)
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'rating':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    default:
      return sorted
  }
}