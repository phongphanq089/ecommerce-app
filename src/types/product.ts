export interface Image {
  url: string
}

export interface MediaItem {
  image: Image
}

export interface Media {
  items: MediaItem[]
}

interface ProductOption {
  productOptions: {
    optionType: string
    name: string
    choices: []
  }[]
}

interface ProductVariant {
  choices: Object
  variants: []
  stock: Object
}

interface price {
  price: {
    price: string
  }
}
export interface ProductListType {
  name: string
  price: price
  media: Media
}

export interface Product {
  _id: string
  name: string
  slug: string
  description: string
  price: {
    price: number
    discountedPrice: number
  }
  collectionIds: string[]
  media: {
    items: MediaItem[]
  }

  productOptions: ProductOption[]
  variants?: ProductVariant[]
}
