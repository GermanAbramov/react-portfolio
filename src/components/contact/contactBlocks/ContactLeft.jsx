import { contacts } from "../../../data/contacts"
import { motion } from "motion/react";
import { slideInVariants } from "../../../utils/animation";

export default function ContactLeft() {
    return (
        <div className="contact-left">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={slideInVariants("top", 0.6, 50, false)}
            >Let's discuss your project</motion.h2>
            <ul className="contact-list">
                {contacts.map((contact, index) => (
                    <motion.li key={contact.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={index}
                        variants={slideInVariants("top", 0.6, 50)}
                    >
                        <h3><contact.icon /> {contact.title}</h3>
                        <span><a href={contact.link}>{contact.value}</a></span>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}
