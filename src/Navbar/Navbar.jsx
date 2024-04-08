import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='menu'>
            <nav className='layout'>
                <ul className='menu-list'>
                    <li><Link className='navlink' to={"/parfumes"}>Perfumes</Link></li>
                    <li><Link className='navlink' to={"/makeup"}>Makeup</Link></li>
                    <li><Link className='navlink' to={"/hair"}>Hair</Link></li>
                    <li><Link className='navlink' to={"/skincare"}>Skincare</Link></li>
                    <li><Link className='navlink' to={"/bath"}>Bath & Body</Link></li>
                    <li><Link className='navlink' to={"/formen"}>For Men</Link></li>
                    <li><Link className='navlink' to={"/accessories"}>Accessories</Link></li>
                    <li><Link className='navlink' to={"/health&care"}>Health & Care</Link></li>
                    <li><Link className='navlink' to={"/gifts"}>Gifts</Link></li>
                    <li><Link className='navlink' to={"/brands"}>Brands</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar