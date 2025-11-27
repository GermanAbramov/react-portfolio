import { skills } from "../../../data/skills"

export default function Skills() {
    return (
        <div className="education">
            <h4 className="label">Навыки</h4>
            <ul className="bars">
                {skills.map((skill, index) => (
                    <li className="bar" key={index}>
                        <div className="info">
                            <span>{skill.skill}</span>
                            <span>{skill.level}</span>
                        </div>
                        <div className={`line ${skill.skill}`}></div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
