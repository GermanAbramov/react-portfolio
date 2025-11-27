import './Skills.css'
import SectionTitle from '../sectionTitle/SectionTitle'
import Education from './skillBlocks/Education'
import Awards from './skillBlocks/Awards'
import Skills from './skillBlocks/Skills'
import WorkExperience from './skillBlocks/WorkExperience'
import { motion } from "motion/react";
import { slideInVariants } from '../../utils/animation'

export default function SkillsInfo() {
    return (
        <section className="skills section" id={encodeURI("Навыки")}>
            <div className="container flex-center">
                <SectionTitle title='Навыки' subtitle='Навыки' />
                <div className="inner-content">
                    <motion.div className="skills-description"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={0}
                        variants={slideInVariants("left", 0.6, 50)}
                    >
                        <h3>Образование и навыки</h3>
                        <p>
                            For more than 5 years our experts have been accomplishing enough with modern Web
                            Development,
                            new generation web and app programming language.
                        </p>
                    </motion.div>
                    <div className="skills-info education-all">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            custom={1}
                            variants={slideInVariants("top", 0.6, 50)}
                        >
                            <Education />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            custom={2}
                            variants={slideInVariants("top", 0.6, 50)}
                        >
                            <Skills />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            custom={3}
                            variants={slideInVariants("top", 0.6, 50)}
                        >
                            <Awards />
                        </motion.div>
                    </div>
                    <WorkExperience />
                </div>
            </div>
        </section>
    )
}
