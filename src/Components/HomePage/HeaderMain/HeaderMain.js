import React from 'react';
import './HeaderMain.css';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <div className='headerMain'>
            <h1>THE BEST FITNESS <br /> STUDIO IN TOWN</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum error temporibus illo corrupti neque reprehenderit eius ab harum nobis voluptates iusto sit nemo nostrum, maiores nulla voluptas veniam ullam ex debitis corporis! Repellendus</p>
            <Link to={'/price'}><button className='joinBtn'>JOIN US</button></Link>
        </div>
    );
};

export default HeaderMain;