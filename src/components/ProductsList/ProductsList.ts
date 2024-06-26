type Product = {
    id: number
    image: string
    price: string
    productType: string;
    sizes: string[]
    isLiked: boolean
}

const ProductsList:Product[] = [
    {
        id: 0,
        image: '/images/catalog/1.png',
        price: '69',
        productType: 'Geometry',
        sizes: ['XS', 'S', 'M', 'L', 'by measurements'],
        isLiked: false
    },

    {
        id: 1,
        image: '/images/catalog/2.png',
        price: '69',
        productType: 'Selena',
        sizes: ['XS', 'S', 'M', 'L', 'by measurements'],
        isLiked: true
    },

    {
        id: 2,
        image: '/images/catalog/3.png',
        price: '69',
        productType: 'Micaela Coral',
        sizes: ['XS', 'S', 'M', 'L', 'by measurements'],
        isLiked: false
    },

    {
        id: 3,
        image: '/images/catalog/4.png',
        price: '69',
        productType: 'Dakota Orange',
        sizes: ['XS', 'S', 'M', 'L', 'by measurements'],
        isLiked: false
    },

    {
        id: 4,
        image: '/images/catalog/5.png',
        price: '69',
        productType: 'Unity',
        sizes: ['XS', 'S', 'M', 'L', 'by measurements'],
        isLiked: false
    },

    {
        id: 5,
        image: '/images/catalog/6.png',
        price: '69',
        productType: 'Mandy',
        sizes: ['XS', 'S', 'M', 'L', 'by measurements'],
        isLiked: false
    },

    {
        id: 6,
        image: '/images/catalog/7.png',
        price: '69',
        productType: 'Aloha Pink',
        sizes: ['XS', 'S', 'M', 'L', 'by measurements'],
        isLiked: true
    },
     
    {
        id: 7,
        image: '/images/catalog/8.png',
        price: '69',
        productType: 'Aloha Pink',
        sizes: ['XS', 'S', 'M', 'L', 'by measurements'],
        isLiked: false
    }
]

export default ProductsList