import { education } from "../../../data/education"

export default function Education() {
    return (
        <div className="education">
            <h4 className="label">Образование</h4>
            <ul className="education-list">
                {education.map((edu, index) => (
                    <li className="item" key={index}>
                        <span className="year">{edu.year}</span>
                        <p>{edu.degree} - {edu.institute}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
