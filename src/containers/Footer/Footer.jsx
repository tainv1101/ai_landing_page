import classNames from 'classnames/bind';
import style from './Footer.module.scss'

import logo from '../../assets/logo.svg'

const sx = classNames.bind(style)
function Footer() {
    return ( 
        <div className={sx('footer','section__padding')}>
            <div className={sx('footer__heading')}>
                <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
            </div>

            <div className={sx('footer__btn')}>
                <button type='button' >Request Early Access</button>
            </div>

            <div className={sx('footer__content')} >
                <div className={sx('footer__content-logo')}>
                    <img src={logo} alt='logo' />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>

                <div className={sx('footer__content-links')} >
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className={sx('footer__content-links')} >
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className={sx('footer__content-links')} >
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>

            </div>

            <div className={sx('footer__copyright')}>
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
     );
}

export default Footer;