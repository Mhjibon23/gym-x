import React from 'react';
import './Footer.css';
import youtube from '../../../Resource/icon/bxl-youtube.png';
import facebook from '../../../Resource/icon/bxl-facebook.png';
import insta from '../../../Resource/icon/bxl-instagram.png';
import twitter from '../../../Resource/icon/bxl-twitter.png';
import whp from '../../../Resource/icon/bxl-whatsapp.png';

const Footer = () => {
    return (
        <div className='mt-3 py-5 footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-xl-2">
                        <div className="footerLogo m-2">
                            <h2>POWER <span style={{ color: '#FCD842' }}>X</span></h2>
                        </div>
                    </div>
                    <div className="col-md-10 col-xl-10">
                        <div className="footerContent m-2">
                            <div className="row">
                                <div className="col-md-6 col-xl-3 mt-3">
                                    <div className="fContent m-2">
                                        <h5>Need Help?</h5>
                                        <ul>
                                            <li><a href="/">Help Center</a></li>
                                            <li><a href="/">Email Support</a></li>
                                            <li><a href="/">Live Chat</a></li>
                                            <li><a href="/">Gift Certificates</a></li>
                                            <li><a href="/">Send Us Feedback</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mt-3">
                                    <div className="fContent m-2">
                                        <h5>Digital Resources</h5>
                                        <ul>
                                            <li><a href="/">Article</a></li>
                                            <li><a href="/">E-books</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mt-3">
                                    <div className="fContent m-2">
                                        <h5>Connect with Us</h5>
                                        <div className="footerIcon">
                                            <img src={youtube} alt="" />
                                            <img src={facebook} alt="" />
                                            <img src={insta} alt="" />
                                            <img src={twitter} alt="" />
                                            <img src={whp} alt="" />
                                        </div>
                                        <ul>
                                            <li><a href="/">Forum</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mt-3">
                                    <div className="fContent m-2">
                                        <h5>Join Our Newsletter</h5>
                                        <p>Get exclusive news, features, <br /> and updates from The Shredder Weight Loss Academy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center text-white mt-5'><i class='bx bx-copyright'></i> {new Date().getFullYear()} Mehedi Hasan. All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;