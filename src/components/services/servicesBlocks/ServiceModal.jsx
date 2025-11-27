import { FaCheckCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function ServiceModal({ service, isActive, closeModal }) {
    return (
        <>
            <div className={`service-modal ${isActive ? 'active' : ''}`}>
                <div className="service-modal-body">
                    <FaXmark className="modal-close-btn" onClick={closeModal} />
                    <h3>{service.title}</h3>
                    <h4>{service.subTitle}</h4>
                    <p>{service.description}</p>
                    <h4>{service.text}</h4>
                    <ul>
                        {service.list.map((item, index) => (
                            <li key={index}>
                                <FaCheckCircle className="service-modal-icon" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
