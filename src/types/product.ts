export interface Image {
  url: string
}

export interface MediaItem {
  image: Image
}

export interface Media {
  items: MediaItem[]
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
  name: string
  slug: string
  price: {
    price: number
    discountedPrice: number
  }
  collectionIds: string[]
  media: {
    items: MediaItem[]
  }
  variants: []
}
