import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.css';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 300);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button className={`btn scrollToTop flex-center ${isVisible ? 'active' : ''}`} onClick={scrollToTop}>
            <FaArrowUp />
        </button>
    )
}
