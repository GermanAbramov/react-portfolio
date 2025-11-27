import { workExperience } from "../../../data/workExperience";
import { motion } from "framer-motion";
import { slideInVariants } from '../../../utils/animation'

export default function WorkExperience() {
    return (
        <div className="education work-exp">
            <motion.h3 className="work-exp-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={2}
                variants={slideInVariants("top", 0.6, 30)}
            >Work & Experience</motion.h3>
            <div className="skills-info">
                {workExperience.map((exp, i) => (
                    <motion.div
                        className="experience-card"
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={i + 1}
                        variants={slideInVariants("top", 0.6, 30)}
                    >
                        <div className="upper">
                            <h3>{exp.title}</h3>
                            <h5>{exp.employmentType}</h5>
                            <span>{exp.period}</span>
                        </div>
                        <div className="hr"></div>
                        <h4 className="label">{exp.company}</h4>
                        <p>{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
