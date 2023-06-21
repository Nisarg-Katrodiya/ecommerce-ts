
const productDetail = {
    name: 'Basic Tee 6-Pack',
    breadcrumbs: [
        { id: 1, name: 'Products', href: '/' },
    ],
}

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
      id: 'color',
      name: 'Color',
      options: [
          { value: 'white', label: 'White', checked: false },
          { value: 'beige', label: 'Beige', checked: false },
          { value: 'blue', label: 'Blue', checked: true },
          { value: 'brown', label: 'Brown', checked: false },
          { value: 'green', label: 'Green', checked: false },
          { value: 'purple', label: 'Purple', checked: false },
      ],
  },
  {
      id: 'category',
      name: 'Category',
      options: [
          { value: 'new-arrivals', label: 'New Arrivals', checked: false },
          { value: 'sale', label: 'Sale', checked: false },
          { value: 'travel', label: 'Travel', checked: true },
          { value: 'organization', label: 'Organization', checked: false },
          { value: 'accessories', label: 'Accessories', checked: false },
      ],
  },
  {
      id: 'size',
      name: 'Size',
      options: [
          { value: '2l', label: '2L', checked: false },
          { value: '6l', label: '6L', checked: false },
          { value: '12l', label: '12L', checked: false },
          { value: '18l', label: '18L', checked: false },
          { value: '20l', label: '20L', checked: false },
          { value: '40l', label: '40L', checked: true },
      ],
  },
]

const navigation = [
  {
    id: 'men',
    name: 'Men',
    data: [
      { name: 'Tops', href: '#' },
      { name: 'Pants', href: '#' },
      { name: 'Sweaters', href: '#' },
      { name: 'T-Shirts', href: '#' },
      { name: 'Jackets', href: '#' },
      { name: 'ActiveWear', href: '#' },
      { name: 'Browse All', href: '#' },
    ],
    featured: [
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
        imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
      },
      {
        name: 'Artwork Tees',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
        imageAlt:
          'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
      },
    ],
    
  },
  {
    id: 'women',
    name: 'Women',
    data: [
      { name: 'Tops', href: '#' },
      { name: 'Dresses', href: '#' },
      { name: 'Pants', href: '#' },
      { name: 'Denim', href: '#' },
      { name: 'Sweaters', href: '#' },
      { name: 'T-Shirts', href: '#' },
      { name: 'Jackets', href: '#' },
      { name: 'ActiveWear', href: '#' },
      { name: 'Browse All', href: '#' },
    ],
    featured: [
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
        imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
      },
      {
        name: 'Basic Tees',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
        imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
      },
    ],
  },
  {
    id: 'accessories',
    name: 'Accessories',
    data: [
      { name: 'Watches', href: '#' },
      { name: 'Wallets', href: '#' },
      { name: 'Bags', href: '#' },
      { name: 'Sunglasses', href: '#' },
      { name: 'Hats', href: '#' },
      { name: 'Belts', href: '#' },
    ]
  }
];

export { productDetail, sortOptions, subCategories, filters, navigation }