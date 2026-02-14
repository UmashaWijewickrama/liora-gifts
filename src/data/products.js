export const products = [
  {
    id: 'prod-001',
    name: 'Diamond Eternity Ring',
    category: 'jewelry',
    price: 2850,
    originalPrice: 3200,
    description: 'Exquisite 18k white gold eternity band adorned with brilliant-cut diamonds.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop'],
    rating: 5.0,
    reviews: 47,
    inStock: true,
    featured: true,
    newArrival: false,
    details: ['18k white gold', 'Round brilliant diamonds', '1.5ct total weight']
  },
  {
    id: 'prod-002',
    name: 'Pearl Necklace',
    category: 'jewelry',
    price: 1950,
    description: 'Luminous South Sea pearls on silk thread with diamond clasp.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop'],
    rating: 4.9,
    reviews: 63,
    inStock: true,
    featured: true,
    newArrival: true,
    details: ['South Sea pearls', '16-inch length', '14k gold clasp']
  },
  {
    id: 'prod-003',
    name: 'Velvet Evening Clutch',
    category: 'handbags',
    price: 895,
    description: 'Sumptuous velvet clutch with gold hardware and chain strap.',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop'],
    rating: 4.8,
    reviews: 52,
    inStock: true,
    featured: false,
    newArrival: true,
    details: ['Italian velvet', 'Gold hardware', 'Removable chain']
  },
  {
    id: 'prod-004',
    name: 'Silk Scarf',
    category: 'scarves',
    price: 385,
    description: 'Hand-painted pure silk scarf with botanical motif.',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&h=800&fit=crop'],
    rating: 4.9,
    reviews: 38,
    inStock: true,
    featured: true,
    newArrival: false,
    details: ['100% silk', 'Hand-painted', '35" x 35"']
  },
  {
    id: 'prod-005',
    name: 'Leather Tote',
    category: 'handbags',
    price: 1650,
    description: 'Structured Italian leather tote with gold accents.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop'],
    rating: 5.0,
    reviews: 89,
    inStock: true,
    featured: true,
    newArrival: false,
    details: ['Italian leather', 'Gold hardware', 'Multiple pockets']
  },
  {
    id: 'prod-006',
    name: 'Drop Earrings',
    category: 'jewelry',
    price: 1250,
    description: 'Cascading diamond and sapphire earrings in rose gold.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop'],
    rating: 4.9,
    reviews: 44,
    inStock: true,
    featured: false,
    newArrival: true,
    details: ['18k rose gold', 'Natural sapphires', 'Diamond accents']
  },
  {
    id: 'prod-007',
    name: 'Designer Sunglasses',
    category: 'sunglasses',
    price: 625,
    description: 'Oversized acetate frames with polarized lenses.',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop'],
    rating: 4.7,
    reviews: 56,
    inStock: true,
    featured: false,
    newArrival: false,
    details: ['Italian acetate', 'Polarized lenses', 'UV400 protection']
  },
  {
    id: 'prod-008',
    name: 'Tennis Bracelet',
    category: 'jewelry',
    price: 3200,
    originalPrice: 3800,
    description: 'Classic diamond tennis bracelet in platinum.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop'],
    rating: 5.0,
    reviews: 72,
    inStock: true,
    featured: true,
    newArrival: false,
    details: ['Platinum 950', '40 diamonds', '5ct total weight']
  },
]

export const categories = [
  {
    id: 'jewelry',
    name: 'Jewelry',
    description: 'Timeless pieces with precious metals and stones',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop'
  },
  {
    id: 'handbags',
    name: 'Handbags',
    description: 'Luxurious leather goods and designer bags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=600&fit=crop'
  },
  {
    id: 'scarves',
    name: 'Scarves',
    description: 'Elegant silk and cashmere accessories',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&h=600&fit=crop'
  },
]

export default products
