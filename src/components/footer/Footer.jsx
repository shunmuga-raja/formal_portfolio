import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">SHAN</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href='https://www.linkedin.com/in/shanmuga-raja-914124219' className='footer__social-link' target='_blank'>
                        <i class="uil uil-linkedin"></i>
                    </a>

                    {/*dribble icons*/}
                    <a href='https://portfolio-92877.web.app' className='footer__social-link' target='_blank'>
                        <i class="uil uil-dribbble"></i>
                    </a>

                    {/*github icons*/}
                    <a href='https://github.com/shunmuga-raja' className='footer__social-link' target='_blank'>
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className='footer__copy'>&#169; ShanCoder. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer