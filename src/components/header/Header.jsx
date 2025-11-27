import { useState } from 'react';
import Nav from '../nav/Nav'
import './Header.css'
import { FaXing } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { RemoveScroll } from 'react-remove-scroll';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <a href="" className="logo">GERMAN ABRAMOV</a>
                    <RemoveScroll enabled={isMenuOpen}>
                        <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                    </RemoveScroll>
                    <div className="nav-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <FaXing /> : <FaBarsStaggered />}
                    </div>
                </div>
            </div>
        </header>
    )
}
