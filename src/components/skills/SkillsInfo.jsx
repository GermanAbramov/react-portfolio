import './Skills.css'
import SectionTitle from '../sectionTitle/sectionTitle'
import Education from './skillBlocks/Education'
import Awards from './skillBlocks/Awards'
import Skills from './skillBlocks/Skills'

export default function SkillsInfo() {
    return (
        <section className="skills section" id="skills">
            <div className="container flex-center">
                <SectionTitle title='Навыки' subtitle='Навыки' />
                <div className="inner-content">
                    <div className="skills-description">
                        <h3>Образование и навыки</h3>
                        <p>
                            For more than 5 years our experts have been accomplishing enough with modern Web
                            Development,
                            new generation web and app programming language.
                        </p>
                    </div>
                    <div className="skills-info education-all">
                        <Education />
                        <Skills />
                        <Awards />
                    </div>
                    {/* <div className="education work-exp">
                        <h3 className="work-exp-title">Work & Experience</h3>
                        <div className="skills-info">
                            <div className="experience-card">
                                <div className="upper">
                                    <h3>Sr. Graphic Designer</h3>
                                    <h5>Part Time | Office</h5>
                                    <span>2020 - 2021</span>
                                </div>
                                <div className="hr"></div>
                                <h4 className="label">Avada Theme.</h4>
                                <p>I design and develop services for customers of all sizes, specializing in creating
                                    stylish, modern websites
                                </p>
                            </div>
                            <div className="experience-card">
                                <div className="upper">
                                    <h3>Cr. Web Developer</h3>
                                    <h5>Full Time | InHouse</h5>
                                    <span>2019 - 2020</span>
                                </div>
                                <div className="hr"></div>
                                <h4 className="label">ib-themes ltd.</h4>
                                <p>I design and develop services for customers of all sizes, specializing in creating
                                    stylish, modern websites
                                </p>
                            </div>
                            <div className="experience-card">
                                <div className="upper">
                                    <h3>Jr. Web Developer</h3>
                                    <h5>Full Time | Remote</h5>
                                    <span>2018 - 2019</span>
                                </div>
                                <div className="hr"></div>
                                <h4 className="label">Creative Gigs.</h4>
                                <p>I design and develop services for customers of all sizes, specializing in creating
                                    stylish, modern websites
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
