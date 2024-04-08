import React from 'react'
import { useState, useEffect } from 'react'
import {useParams } from "react-router-dom"
import axios from "axios"
import "./Description.css"

const Description = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
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
        fetchProduct();
    }, [id]);
    if (!product) {
        return <div className='loading'></div>
    }
  return (
    <div className='desc-wrapper'>
        <p>{product.description}</p>
    </div>
  )
}

export default Description