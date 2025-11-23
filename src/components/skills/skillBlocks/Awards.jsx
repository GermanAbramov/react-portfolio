import { awards } from "../../../data/awards"

export default function Awards() {
    return (
        <div className="education">
            <h4 className="label">Награды</h4>
            <ul className="education-list">
                {awards.map((award, index) => (
                    <li className="item" key={index}>
                        <span className="year">{award.year}</span>
                        <p><span>{award.title}</span> - {award.institution}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
