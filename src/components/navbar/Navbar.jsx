import './navbar.css';

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <header>

            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href='/#'>home</a>
                <a href='/about'>about</a>
                <a href='/projects'>Projects</a>
                <a href='/contact'>contact</a>
                <button className='nav__btn nav__close__btn' onClick={showNavbar} >
                    <FaTimes />
                </button>
            </nav>
            <button className='nav__btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}