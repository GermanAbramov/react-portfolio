import { FaDownload } from "react-icons/fa";
// import { aboutImg } from '../../assets/images'
import './Aboutme.css'
import SectionTitle from "../sectionTitle/sectionTitle";

export default function Aboutme() {
    return (
        <section className="about section" id="about">
            <div className="container flex-center">
                <SectionTitle title='Обо мне' subtitle='Обо мне' />
                <div className="about-wrapper">
                    <div className="about-img"><img src={null} alt="Плейсхолдер)" /></div>
                    <div className="about-info">
                        <div className="description">
                            <h3>Я Герман</h3>
                            <h4>Junior <span>Front-End Разработчик</span>, нахожусь в  <span>Москве</span></h4>
                            <p>
                                I design and develop services for customers specializing creating stylish, modern
                                websites,
                                web services and online stores. My passion is to design digital user experiences through
                                meaningful interactions. Check out my Portfolio
                            </p>
                        </div>
                        <ul className="professional-list">
                            <li className="list-item">
                                <span className="number">5+</span>
                                <span className="text">Years of experience</span>
                            </li>
                            <li className="list-item">
                                <span className="number">3K+</span>
                                <span className="text">Happy Customers</span>
                            </li>
                            <li className="list-item">
                                <span className="number">5+</span>
                                <span className="text">Success Projects</span>
                            </li>
                        </ul>
                        <a href="" className="inner-info-link">Download
                            <FaDownload />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
