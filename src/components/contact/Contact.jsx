import './Contact.css'
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactLeft from "./contactBlocks/ContactLeft";
import ContactRight from "./contactBlocks/ContactRight";


export default function Contact() {
    return (
        <section className="contact section" id={encodeURI("Контакты")}>
            <div className="container flex-center">
                <SectionTitle title="Контакты" subtitle="Контакты" />
                <div className="contact-wrapper">
                    <ContactLeft />
                    <ContactRight />
                </div>
            </div>
        </section>
    )
}
