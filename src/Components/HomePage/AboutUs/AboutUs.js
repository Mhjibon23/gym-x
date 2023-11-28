import React from 'react';
import './AboutUs.css';
import aboutImage from '../../../Resource/images/about.jpg';
const AboutUs = () => {
    return (
        <div className='mt-3 py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-3">
                            <div className="aboutImage">
                                <img className='img-fluid rounded ' src={aboutImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="aboutContainer">
                            <h2 className='px-2'>ABOUT US</h2>
                            <div className="about">
                                <h3 className='px-2'>WE ARE HERE TO DREAM!</h3>
                                <h4 className='px-2'>OUR TEAM IS HERE SERVE YOUR</h4>
                                <p className='px-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eos quo exercitationem similique voluptatibus corporis distinctio delectus quaerat, debitis esse soluta nihil deleniti vero sed quibusdam quis? Et porro blanditiis, quo omnis repellendus sit? Vel aspernatur quae corrupti, optio aliquid esse culpa tempore itaque quisquam iusto quas exercitationem adipisci ratione.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;