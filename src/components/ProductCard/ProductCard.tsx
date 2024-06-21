import React from 'react'
import './ProductCard.css'

type ProductCardProps = {
    id?: number
    image: string
    price: string
    prodeuctType: string;
    sizes: string[]
    isLiked?: boolean
}

const ProductCard = ({ id = -1, image, price, prodeuctType, sizes, isLiked = false }: ProductCardProps) => {
    
    const [wish, setWish] = React.useState(isLiked) 
    
    const handleWish = () => {
        setWish((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div>
            <div className='pos-r'>
                <div><img src={image} alt="product" /></div>
                <button className='product-card-wish' onClick={handleWish}>
                    <img src={wish ? '/images/favour.svg' : '/images/no-favour.svg'} alt="wish" />
                </button>
            </div>
            <div className="product-card-price">${price}</div>
            <div className="product-card-type">{prodeuctType}</div>
            <div className="product-card-sizes d-f align-center">
                {
                    sizes.map((elem) => {
                        return (
                            <>
                                <div>{elem}</div>
                                <div className="sizes-divider"></div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductCard