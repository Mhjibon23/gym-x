import React from 'react';
import './PricingPlan.css';
import ShearHeader from '../Sheared/ShearHeader/ShearHeader';
import img1 from '../../Resource/images/wimage1.jpg';
import img2 from '../../Resource/images/wimage2.jpg';
import img3 from '../../Resource/images/wimage3.jpg';
import PricingContent from '../PricingContent/PricingContent';
import Footer from '../Sheared/Footer/Footer';
const PricingPlan = () => {
    const price = [
        {
            planName: 'ADVANCED PLAN',
            price: '$140',
            img: img1
        },
        {
            planName: 'BASIC PLAN',
            price: '$120',
            img: img2
        },
        {
            planName: 'BEGINERS',
            price: '$90',
            img: img3
        },
    ]
    return (
        <div>
            <ShearHeader></ShearHeader>
            <div className="classHeading">
                <h2>PRICING PLANS</h2>
            </div>
            <div className="priceHeading text-center mt-4 pb-3">
                <h2><span>CHOOSE THE OFFER </span> THAT SUITS YOU</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta exercitationem, <br /> deserunt sequi labore aut et?</p>
            </div>
            <div className="container mb-5">
                <div className="row">
                    {
                        price.map(pricePlan => <PricingContent pricePlan={pricePlan}></PricingContent>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PricingPlan;