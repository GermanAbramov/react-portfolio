import { services } from '../../data/services'
import './Services.css'
import SectionTitle from '../sectionTitle/SectionTitle'
import ServiceItem from './servicesBlocks/serviceItem'
import { motion } from "motion/react";
import { slideInVariants } from '../../utils/animation'

export default function Services() {
    return (
        <section className="services section" id={encodeURI("Услуги")}>
            <div className="container flex-center">
                <SectionTitle title='Услуги' subtitle='Услуги' />
                <div className="services-wrapper">
                    <motion.h3
                        className="services-description"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={1}
                        variants={slideInVariants("left", 0.6, 50, false)}
                    >What I provide</motion.h3>
                    <ul className="services-list">
                        <ServiceItem services={services} />
                    </ul>
                </div>
            </div>
        </section>
    )
}
