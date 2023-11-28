import React from 'react';
import './PurchaseForm.css';
import ShearHeader from '../Sheared/ShearHeader/ShearHeader';
import Stepperr from '../Stepper/Stepperr';
import Footer from '../Sheared/Footer/Footer';

const PurchaseForm = () => {
    return (
        <div>
            <ShearHeader></ShearHeader>
            <div className="classHeading">
                <h2>PRICING PLANS</h2>
            </div>
            <div className="stepper d-flex justify-content-center mt-3 py-5">
                <Stepperr></Stepperr>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PurchaseForm;