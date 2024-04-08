import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import "./SinglePage.css"
import {Outlet} from "react-router-dom" 
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/productsSlice'


const SinglePage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `https://makeup-api.herokuapp.com/api/v1/products/${id}.json?product_type=bronzer`
                );
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        console.log(product)
        fetchProduct();
    }, [id]);


    if (!product) {
        return <div className='loading'></div>
    }
    const addCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className='single-page'>
            <div key={product.id} className="single-card">
                <div className='brand-name'>
                    <h4 className="single-brand">{product.brand}</h4>
                    <p className="name">{product.name}</p>
                    <div className="single__stars">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                </div>
                <div className="card-img">
                    {product.image_link ? (
                        <img
                            className="single-image"
                            src={product.image_link}
                            alt=""
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://sdcdn.io/mac/ca/mac_sku_M22013_1x1_1.png?width=1080&height=1080";
                            }}
                        />
                    ) : (
                        <img
                            className="single-image"
                            src="https://sdcdn.io/mac/ca/mac_sku_M22013_1x1_1.png?width=1080&height=1080"
                            alt=""
                        />
                    )}
                </div>
                <div className='sale'>
                    <strong className="single-price">${product.price}</strong>
                    <button className='btn gramm'>40ml</button>
                    <button onClick={() => addCart(product)} className='buy btn'>Buy</button>
                    <div className='stock'>
                        <span>In stock !</span>
                        <div>
                            <strong>Product ID: </strong>
                            <span>{product.id}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-tabs'>
                <ul className='features'>
                    <li><Link className='features-link' to={"characteristics"}>Characteristic</Link></li>
                    <li><Link className='features-link' to={"description"}>Description</Link></li>
                </ul>
                <ul className='charac-wrapper'>
                    <li className='characs'>
                        <Outlet/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SinglePage