import { portfolio } from '../../data/portfolio'
import SectionTitle from '../sectionTitle/SectionTitle'
import './Portfolio.css'
import PortfolioItem from './portfolioBlocks/PortfolioItem'

export default function Portfolio() {
    return (
        <section className="portfolio section" id={encodeURI("Портфолио")}>
            <div className="container flex-center">
                <SectionTitle title="Портфолио" subtitle="Портфолио" />
                <div className="portfolio-wrapper">
                    {portfolio.map((item, index) => (
                        <PortfolioItem item={item} key={item.id} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
