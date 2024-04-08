import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <div className='main-header'>
            <nav className='header'>
                <div className='header-wrapper'>
                    <div>
                        <span>100% authentic products!</span>
                    </div>
                    <div className='actions'>
                        <ul className='links'>
                            <li><NavLink className={"header-linkk"} to={"/offers"}>Special offers</NavLink></li>
                            <li><NavLink className={"header-link"} to={"/delivery"}>Delivery and Payment</NavLink></li>
                            <li><NavLink className={"header-link"} to={"/about"}>About us</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <Link className='club' to={"/club"}><span>★</span>Beauty Club</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <div className='middle-wrapper'>
                    <div className='search'></div>
                    <div className='logoo'>
                        <Link to={"/"} className='slogan'></Link>
                    </div>
                    <div className='header-row'>
                        <Link to={"/contact"} className='office'></Link>
                        <Link to={"/favourites"} className='like'></Link>
                        <Link to={"/cart/:id"} className='cart'></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header