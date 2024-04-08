import React from 'react'
import { useState, useEffect } from 'react'
import {useParams } from "react-router-dom"
import axios from "axios"
import "./Characteristics.css"

const Characteristics = () => {
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
        console.log(product)
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div className='loading'></div>
    }

    return (
        <div className='charc-table'>
            <p><strong>Brand: </strong>{product.brand}</p>
            <p><strong>Line: </strong>{product.name}</p>
            <p><strong>Product Type: </strong>{product.product_type}</p>
            <p><strong>Classification: </strong>elite</p>
            <p><strong>Country: </strong>Russia</p>
            <p><strong>Collection:</strong>{product.name}</p>
            <p><strong>Made in: </strong>China</p>
            <p><strong>Gender: </strong>for women</p>
        </div>
    )
}

export default Characteristics