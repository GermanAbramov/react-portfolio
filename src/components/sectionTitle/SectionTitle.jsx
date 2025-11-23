import './sectionTitle.css'

export default function SectionTitle({ title, subtitle }) {
    return (
        <>
            <h2 className="inner-title">{title}</h2>
            <h3 className="inner-second-title">{subtitle}</h3>
        </>
    )
}
