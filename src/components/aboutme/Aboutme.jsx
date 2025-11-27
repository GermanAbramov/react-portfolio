import { FaDownload } from "react-icons/fa";
// import { aboutImg } from '../../assets/images'
import './Aboutme.css'
import SectionTitle from "../sectionTitle/SectionTitle";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";


export default function Aboutme() {
    return (
        <section className="about section" id={encodeURI("Обо мне")}>
            <div className="container flex-center">
                <SectionTitle title='Обо мне' subtitle='Обо мне' />
                <div className="about-wrapper">
                    <motion.div
                        className="about-img"
                        variants={slideInVariants("left", 0.8, 100, false)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    ><img src={null} alt="Плейсхолдер)" /></motion.div>
                    <div className="about-info">
                        <div className="description">
                            <motion.h3
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                                custom={0}
                                variants={slideInVariants("right", 0.7, 100)}
                            >Я Герман</motion.h3>
                            <motion.h4
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                                custom={1}
                                variants={slideInVariants("right", 0.7, 100)}
                            >Junior <span>Front-End Разработчик</span>, нахожусь в  <span>Москве</span></motion.h4>
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.4 }}
                                custom={2}
                                variants={slideInVariants("right", 0.7, 100)}
                            >
                                I design and develop services for customers specializing creating stylish, modern
                                websites,
                                web services and online stores. My passion is to design digital user experiences through
                                meaningful interactions. Check out my Portfolio
                            </motion.p>
                        </div>
                        <ul className="professional-list">
                            <motion.li className="list-item"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                                custom={3}
                                variants={slideInVariants("right", 0.7, 100)}
                            >
                                <span className="number">5+</span>
                                <span className="text">Years of experience</span>
                            </motion.li>
                            <motion.li className="list-item"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                                custom={4}
                                variants={slideInVariants("right", 0.7, 100)}>
                                <span className="number">3K+</span>
                                <span className="text">Happy Customers</span>
                            </motion.li>
                            <motion.li className="list-item"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                                custom={5}
                                variants={slideInVariants("right", 0.7, 100)}
                            >
                                <span className="number">5+</span>
                                <span className="text">Success Projects</span>
                            </motion.li>
                        </ul>
                        <motion.a href="" className="inner-info-link"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            custom={2}
                            variants={slideInVariants("right", 0.7, 70)}
                        >Download
                            <FaDownload />
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    )
}
