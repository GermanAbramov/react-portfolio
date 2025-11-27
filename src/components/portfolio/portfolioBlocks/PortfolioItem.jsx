import { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import { motion } from "motion/react";
import { slideInVariants } from "../../../utils/animation";

export default function PortfolioItem({ item, index }) {
    const [isModalOpen, setIssModalOpen] = useState(false);

    const openModal = () => {
        setIssModalOpen(true);
    }

    const closeModal = () => {
        setIssModalOpen(false);
    }

    return (
        <motion.div className="portfolio-img-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={index}
            variants={slideInVariants("top", 0.6, 50)}
        >
            <div className="img-card" onClick={openModal}>
                <div className="overlay"></div>
                <div className="info">
                    <h3>{item.title}</h3>
                    <span>{item.category}</span>
                </div>
                <img src={item.imgSrc} alt={item.title} />
            </div>
            {isModalOpen && <PortfolioModal item={item} isModalOpen={isModalOpen} closeModal={closeModal} />}
        </motion.div>
    )
}
