import React from 'react'
import PageBreadcrumbs from '../components/PageBreadcrumbs/PageBreadcrumbs'
import './css/Catalog.css'
import ProductsList from '../components/ProductsList/ProductsList'
import ProductCard from '../components/ProductCard/ProductCard'

const Catalog = () => {
    return (
        <>
            <PageBreadcrumbs
                rootPage='Home'
                currentPage='Catalog'
            />
            <div className="catalog-top">
                <h1 className="catalog-title">Women's surfing lycra</h1>
                <form action="" className="catalog-filters d-f">
                    <select name="filterPrice">
                        <option value="0">From cheap to expensive</option>
                    </select>
                    <select name="filterAvailability">
                        <option value="0">Availability</option>
                    </select>
                    <select name="filterColor">
                        <option value="0">Color</option>
                    </select>
                    <select name="filterStyle">
                        <option value="">Style</option>
                    </select>
                    <select name="filterSleeves">
                        <option value="0">Sleeves</option>
                    </select>
                    <select name="filterSize">
                        <option value="0">Size</option>
                    </select>
                    <select name="filterPrice">
                        <option value="0">Price</option>
                    </select>
                    <select name="filterQueries">
                        <option value="0">Popular queries</option>
                    </select>
                </form>
            </div>
            <div className="catalog-content d-f">
                <aside>
                    <button className='catalog-tabs-btn'>All</button>
                    <button className="catalog-tabs-btn tabs-btn_active">For surfing</button>
                    <button className="catalog-tabs-btn">Fused</button>
                    <button className="catalog-tabs-btn">Separate</button>
                    <button className="catalog-tabs-btn">With sleeves</button>
                    <button className="catalog-tabs-btn">Without sleeves</button>
                    <button className="catalog-tabs-btn">With cups</button>
                    <button className="catalog-tabs-btn">With shorts</button>
                    <button className="catalog-tabs-btn">For pregnant</button>
                    <button className="catalog-tabs-btn">Sun protection</button>
                    <button className="catalog-tabs-btn">Tights and leggings</button>
                </aside>
                <div className="catalog-content-box d-f">
                    {
                        ProductsList.map((product) => {
                            return (
                                <ProductCard
                                  id={product.id}
                                  image={product.image}
                                  productType={product.productType}
                                  price={product.price}
                                  sizes={product.sizes}
                                  isLiked={product.isLiked}
                                />
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Catalog