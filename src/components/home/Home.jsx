import { FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDown } from "react-icons/fa6";
// import { mainImg } from "../../assets/images";
import './Home.css'

export default function Home() {
    return (
        <section className="home" id="home">
            <div className="container home-wrapper">
                <div className="media-icons">
                    <a href="">
                        <FaTelegram />
                    </a>
                    <a href="">
                        <FaWhatsapp />
                    </a>
                    <a href="">
                        <FaGithub />
                    </a>
                </div>
                <div className="home-info">
                    <h1>Привет, я Герман</h1>
                    <h3>Front-end разработчик</h3>
                    <p>
                        I create stunning websites for your business, Highly experienced in web design and development
                    </p>
                    <a href="" className="home-info-link inner-info-link">
                        Contact me
                        <FaCircleArrowRight />
                    </a>
                </div>
                <div className="home-img">
                    <img src={null} alt="Плейсхолдер)" />
                </div>
            </div>
            <a href="#about" className="scroll-down">
                Scroll down
                <FaArrowDown />
            </a>
        </section>
    )
}
