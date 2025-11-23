import './Nav.css'
import { Link } from 'react-scroll'

export default function Nav({ isMenuOpen }) {
    const items = ['Главная', 'Обо мне', 'Навыки', 'Сервисы', 'Портфолио', 'Клиенты', 'Контакты']


    return (
        <div className={isMenuOpen ? "nav active" : "nav"}>
            <nav className="nav-menu">
                {items.map((item, i) => (
                    console.log(item),
                    <Link
                        to={item}
                        key={i}
                        className='nav-link'
                    >{item}</Link>
                ))}
            </nav>
        </div>
    )
}
