import './Nav.css'
import { Link } from 'react-scroll'

export default function Nav({ isMenuOpen, toggleMenu }) {
    const items = ['Главная', 'Обо мне', 'Навыки', 'Услуги', 'Портфолио', 'Клиенты', 'Контакты']


    return (
        <nav className={isMenuOpen ? "nav active" : "nav"}>
            <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                {items.map((item, i) => (
                    <Link
                        to={encodeURI(item)}
                        key={i}
                        className='nav-link'
                        onClick={toggleMenu}
                    >{item}</Link>
                ))}
            </div>
        </nav>
    )
}
