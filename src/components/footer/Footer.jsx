import './Footer.css'
import { infoLinks, followLinks } from '../../data/footer'
import FooterLinkGroup from './FooterLinkGroup'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-wrapper">
                <div className="about-group">
                    <h2>Ilay</h2>
                    <p>Frontend Developer</p>
                    <a href="#about">About me</a>
                </div>
                <div className="hr"></div>
                <FooterLinkGroup title="More" links={infoLinks} isSocial={false} />
                <div className="hr"></div>
                <FooterLinkGroup title="Follow" links={followLinks} isSocial={true} />
            </div>
            <p className="footer-text"><span className="year">{currentYear}</span></p>
        </footer>
    )
}
