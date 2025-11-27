import { FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDown } from "react-icons/fa6";
// import { mainImg } from "../../assets/images";
import './Home.css'
import { slideInVariants } from "../../utils/animation";
import { motion } from "motion/react";



const icons = [
    { id: 1, icon: <FaTelegram />, href: "" },
    { id: 2, icon: <FaWhatsapp />, href: "" },
    { id: 3, icon: <FaGithub />, href: "" },
]

export default function Home() {

    return (
        <section className="home" id={encodeURI("Главная")}>
            <div className="container home-wrapper">
                <div className="media-icons">
                    {icons.map((icon, index) => (
                        <motion.a
                            href={icon.href}
                            key={icon.id}
                            custom={index}
                            variants={slideInVariants("right", 0.5, 50)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            {icon.icon}
                        </motion.a>
                    ))}
                </div>
                <div className="home-info">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={0}
                        variants={slideInVariants("left", 0.6, 100)}
                    >Привет, я Герман</motion.h1>
                    <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={1}
                        variants={slideInVariants("left", 0.6, 100)}
                    >Front-end разработчик</motion.h3>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={2}
                        variants={slideInVariants("left", 0.6, 100)}
                    >
                        I create stunning websites for your business, Highly experienced in web design and development
                    </motion.p>
                    <motion.a
                        href=""
                        className="home-info-link inner-info-link"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={3}
                        variants={slideInVariants("left", 0.6, 100)}
                    >
                        Contact me
                        <FaCircleArrowRight />
                    </motion.a>
                </div>
                <motion.div className="home-img"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={slideInVariants("right", 0.6, 100, false)}
                >
                    <img src={null} alt="Плейсхолдер)" />
                </motion.div>
            </div>
            <a href={`#${encodeURI("Обо мне")}`} className="scroll-down">
                Scroll down
                <FaArrowDown />
            </a>
        </section>
    )
}
