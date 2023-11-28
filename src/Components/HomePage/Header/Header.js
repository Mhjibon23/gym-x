import React from 'react';
import Navbarr from '../Navbar/Navbarr';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import playbtn from '../../../Resource/icon/play.png'
const Header = () => {
    return (
        <div className='header '>
            <Navbarr></Navbarr>
            <div className="headerContent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <HeaderMain></HeaderMain>
                        </div>
                        <div className="col-md-6">
                            <div className="video-area">
                                <div className="playbtn">
                                    <img src={playbtn} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;