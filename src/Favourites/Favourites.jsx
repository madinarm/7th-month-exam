import React from 'react'
import { useSelector } from "react-redux"
import "./Favourite.css"

const Favourites = () => {
  const selector = useSelector(state => state.products.favourite)
  console.log(selector)
  return (
    <div className='liked-products'>
      {
        selector.map(product =>
          <div key={product.id} className="card">
            {product.image_link ? (
              <img
                className="image"
                src={product.image_link}
                alt=""
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://sdcdn.io/mac/ca/mac_sku_M22013_1x1_1.png?width=1080&height=1080";
                }}
              />
            ) : (
              <img
                className="image"
                src="https://sdcdn.io/mac/ca/mac_sku_M22013_1x1_1.png?width=1080&height=1080"
                alt=""
              />
            )}
            <div className="card-wrapper">
              <h4 className="brand">{product.brand}</h4>
              <p className="products-name">{product.name}</p>
              <div className="stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <strong className="price">${product.price}</strong>
            </div>
          </div>

        )
      }
    </div>
  )
}

export default Favourites