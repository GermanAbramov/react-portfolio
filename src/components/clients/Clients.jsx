import { clients } from '../../data/clients'
import './Clients.css'
import SectionTitle from '../sectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { slideInVariants } from "../../utils/animation";
import { motion } from "motion/react";


export default function Clients() {
    return (

        <section className="section our-client" id={encodeURI("Клиенты")}>
            <div className="container flex-center">
                <SectionTitle title="Клиенты" subtitle="Клиенты" />
                <motion.div
                    className="our-client-wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    custom={0}
                    variants={slideInVariants("top", 0.6, 50)}
                >
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        className='swiper client-swiper'
                    >
                        {clients.map(client => (
                            <SwiperSlide key={client.id}>
                                <div className="swiper-slide swiper-client-block">
                                    <div className="client-img">
                                        <img src={client.imgSrc} alt={client.name} />
                                    </div>
                                    <div className="client-details">
                                        <p>{client.description}</p>
                                        <h3>{client.name}</h3>
                                        <span>{client.position}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}
