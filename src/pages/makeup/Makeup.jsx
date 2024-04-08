import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Makeup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import { addToFavorite } from "../../redux/productsSlice";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
const Makeup = () => {
  const scrollRef = useRef(null);
  const scrollBlush = useRef(null)
  const [products, setProducts] = useState([]);
  const [eyebrow, setEyebrow] = useState([])
  const dispatch = useDispatch()
  const [eyeliner, setEyeliner] = useState([])
  const [blush, setBlush] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer"
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchBlush = async () => {
      try {
        const response = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush");
        setBlush(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchEyebrow = async () => {
      try {
        const response = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow");
        setEyebrow(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchEyeliner = async () => {
      try {
        const response = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner");
        setEyeliner(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchEyeliner()
    fetchEyebrow()
    fetchBlush();
    fetchProducts();
  }, []);

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
    <div className="hero">
      <div className="hero-actions">
        <div className="hero-items">
          <Link>
            <img className="hero-images" src="https://us-i.makeupstore.com/l/lr/lr1yjtkg3io5.jpg" alt="" />
          </Link>
        </div>
      </div>
      <div className="hero-wrapper">
        <div className="title-arrow">
          <h1>Bronzer</h1>
          <div className="arrows">
            <FontAwesomeIcon className="scroll-button" onClick={scrollLeft} icon={faArrowLeft} />
            <FontAwesomeIcon className="scroll-button" onClick={scrollRight} icon={faArrowRight} />
          </div>
        </div>
        <div className="cards" ref={scrollRef}>
          {products.slice(2).map((product) => (
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
                <Link className="brand-link" to={`/singlepage/${product.id}`}>
                  <h4 className="brand">{product.brand}</h4>
                </Link>
                <p className="product-name">{product.name}</p>
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
          ))}
        </div>
      </div>

      <div className="main-action">
        <div className="action-items">
          <div className="action-item">
            <Link className="action-img">
              <img className="action-img" src="https://us-i.makeupstore.com/v/vl/vlzjfipxhpiq.jpg" alt="" />
            </Link>
          </div>
          <div className="action-item">
            <Link className="action-img">
              <img className="action-img" src="https://us-i.makeupstore.com/y/yf/yf73xymrsaji.jpg" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-wrapper">
        <div className="title-arrow">
          <h1>Blush</h1>
          <div className="arrows">
            <FontAwesomeIcon className="scroll-button" onClick={scrollLeftBlush} icon={faArrowLeft} />
            <FontAwesomeIcon className="scroll-button" onClick={scrollRightBlush} icon={faArrowRight} />
          </div>
        </div>
        <div className="cards" ref={scrollBlush}>
          {
            blush.map(product =>
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

      <div className="main-action">
        <div className="action-items">
          <div className="action-item">
            <Link className="action-img">
              <img className="action-img" src="https://us-i.makeupstore.com/n/n5/n5tefzuoce8m.jpg" alt="" />
            </Link>
          </div>
          <div className="action-item">
            <Link className="action-img">
              <img className="action-img" src="	https://us-i.makeupstore.com/u/ui/uicrhjgrejhj.jpg" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-wrapper">
        <div className="title-arrow">
          <h1>Eyebrow</h1>
          <div className="arrows">
            <FontAwesomeIcon className="scroll-button" onClick={scrollLeftBlush} icon={faArrowLeft} />
            <FontAwesomeIcon className="scroll-button" onClick={scrollRightBlush} icon={faArrowRight} />
          </div>
        </div>
        <div className="cards" ref={scrollBlush}>
          {
            eyebrow.map(product =>
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

      <div className="main-action">
        <div className="action-items">
          <div className="action-item">
            <Link className="action-img">
              <img className="action-img" src="https://us-i.makeupstore.com/6/6e/6ezra4r2mppo.jpg" alt="" />
            </Link>
          </div>
          <div className="action-item">
            <Link className="action-img">
              <img className="action-img" src="https://us-i.makeupstore.com/r/rk/rkr36cpxsrfr.jpg" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-wrapper">
        <div className="title-arrow">
          <h1>Eyeliner</h1>
          <div className="arrows">
            <FontAwesomeIcon className="scroll-button" onClick={scrollLeftBlush} icon={faArrowLeft} />
            <FontAwesomeIcon className="scroll-button" onClick={scrollRightBlush} icon={faArrowRight} />
          </div>
        </div>
        <div className="cards" ref={scrollBlush}>
          {
            eyeliner.map(product =>
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

    </div>
  );
};

export default Makeup;