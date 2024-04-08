import { useEffect, useState } from 'react'
import "./Makeupp.css"
import axios from "axios"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";

const Makeupp = () => {
  const [foundation, setFoundation] = useState([]);

  useEffect(() => {
    const fetchFoundation = async () => {
      try {
        const response = await axios.get(
          "http://makeup-api.herokuapp.com/api/v1/products.json");
        setFoundation(response.data);
      } catch (error) {
        console.log(error);
      }
      fetchFoundation()
    };}, [])


  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 600;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 600;
    }
  };
  const scrollLeftBlush = () => {
    if (scrollBlush.current) {
      scrollBlush.current.scrollLeft -= 600;
    }
  };

  const scrollRightBlush = () => {
    if (scrollBlush.current) {
      scrollBlush.current.scrollLeft += 600;
    }
  };

  const addToFav = (product) => {
    dispatch(addToFavorite(product))
    console.log(dispatch)
  }

  return (
    <div>
      <div>
        {
          foundation.map(product =>
            <div key={product.id} className="card">
              <button onClick={() => addToFav(product)} className="favourite"><FontAwesomeIcon className="heart" icon={faHeart} /></button>
              {product.image_link ? (
                <Link className="img-link" to={`/singlepage/${product.id}`}>
                  <img
                    className="image"
                    src={product.image_link}
                    alt=""
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://sdcdn.io/mac/ca/mac_sku_M22013_1x1_1.png?width=1080&height=1080";
                    }}
                  />
                </Link>
              ) : (
                <img
                  className="image"
                  src="https://sdcdn.io/mac/ca/mac_sku_M22013_1x1_1.png?width=1080&height=1080"
                  alt=""
                />
              )}
              <div className="card-wrapper">
                <p className="products-name">{product.name}</p>
                <Link className="brand-link" to={`/singlepage/${product.id}`}>
                  <h4 className="brand">{product.brand}</h4>
                </Link>
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
    </div>
  )
}

export default Makeupp