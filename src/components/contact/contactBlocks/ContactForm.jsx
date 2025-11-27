import { FaPaperPlane } from "react-icons/fa6"
import { motion } from "motion/react";
import { slideInVariants } from "../../../utils/animation";

export default function ContactForm() {
    return (
        <form className="form contact-form">
            <motion.div
                className="first-row"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={0}
                variants={slideInVariants("top", 0.6, 50)}
            >
                <input placeholder="Name" type="text" />
            </motion.div>
            <motion.div
                className="second-row"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={1}
                variants={slideInVariants("top", 0.6, 50)}
            >
                <input placeholder="Email" type="email" />
                <input placeholder="Subject" type="text" />
            </motion.div>
            <motion.div
                className="third-row"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={2}
                variants={slideInVariants("top", 0.6, 50)}
            >
                <textarea placeholder="Message"></textarea>
            </motion.div>
            <motion.button
                className="contant-btn inner-info-link"
                type="submit"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={3}
                variants={slideInVariants("top", 0.6, 50)}
            >
                Send Message
                <FaPaperPlane />
            </motion.button>
        </form>
    )
}
