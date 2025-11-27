import { FaArrowRight } from "react-icons/fa";
import ServiceModal from "./serviceModal";
import { useState } from "react";
import { motion } from "motion/react";
import { slideInVariants } from "../../../utils/animation";

export default function ServiceItem({ services }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const openModal = (index) => {
        setActiveIndex(index);
    }

    const closeModal = () => {
        setActiveIndex(null);
    }

    return (
        <>
            {services.map((service, index) => (
                <motion.li
                    className="services-container"
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    custom={index}
                    variants={slideInVariants("top", 0.6, 50)}
                >
                    <div className="service-card">
                        <service.icon className="services-icon" />
                        <h3>{service.title}</h3>
                        <div className="learn-more-btn" onClick={() => openModal(index)}>
                            Подробнее
                            <FaArrowRight className="learn-more-icon" />
                        </div>
                    </div>
                    <ServiceModal service={service} isActive={activeIndex === index} closeModal={closeModal} />
                </motion.li>
            ))}
        </>
    )
}
