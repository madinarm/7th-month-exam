import React from 'react'
import { useSelector } from "react-redux"
import "./Cart.css"
import { useState } from 'react'
const Cart = () => {
    const toCart = useSelector(state => state.products.cart)
    console.log(toCart)
    const [currency, setCurrency] = useState("USD");

    const conversionRates = {
        USD: 1,
        RUB: 74.11,
        UZS: 12584.50,
        WON: 1349.4766,
        CNY: 7.2338
    };
    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };


    return (
        <div className='main-cart'>
            <div className='cart-wrapper'>
                {
                    toCart.map((product, index) =>
                        <div key={index} className="card">
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
                                <strong className="price">{(product.price * conversionRates[currency]).toFixed(2)}</strong>
                                <select className='currency' value={currency} onChange={handleCurrencyChange}>
                                    <option value="USD">USD</option>
                                    <option value="RUB">RUB</option>
                                    <option value="UZS">UZS</option>
                                    <option value="WON">WON</option>
                                    <option value="CNY">CNY</option>
                                </select>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default Cart