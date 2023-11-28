import React, { useState } from 'react';
import './Stepperr.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import master from '../../Resource/icon/credit-cards_mastercard.png';
import visa from '../../Resource/icon/credit-cards_visa.png';
import america from '../../Resource/icon/credit-cards_amex.png';
import paypal from '../../Resource/icon/Bitmap.png';
import creaditCard from '../../Resource/icon/creadit.png';
const steps = [
  'Personal Details',
  'Bank Payment',
  'Membership Created',
];
const Stepperr = () => {
  const [activeStep, setActiveStep] = useState(0);
  console.log(activeStep);
  const nextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }

  }
  const previusStep = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }

  }
  return (
    <div className="stepper w-100">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="form-area mt-2 py-3">
          <form action="">
            {/* personal details start here*/}
            {activeStep === 0 &&
              <div className="personalDetails">
                <div className="container my-4">
                  <div className="row">
                    <div className="col-xl-6">
                      <label htmlFor="fname">First Name</label>
                      <div className="input-box">
                        <input type="text" name="fname" id="" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="lname">Last Name</label>
                      <div className="input-box">
                        <input type="text" name="lname" id="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container my-4">
                  <div className="row">
                    <div className="col-xl-6">
                      <label htmlFor="email">Email</label>
                      <div className="input-box">
                        <input type="text" name="email" id="" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="phone">Phone Number</label>
                      <div className="input-box">
                        <input type="text" name="phone" id="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container my-4">
                  <div className="row">
                    <div className="col-xl-6">
                      <label htmlFor="address">Address Line</label>
                      <div className="input-box">
                        <input type="text" name="address" id="" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="country">Country/Region</label>
                      <div className="input-box">
                        <input type="text" name="country" id="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container my-4">
                  <div className="row">
                    <div className="col-xl-6">
                      <label htmlFor="city">City</label>
                      <div className="input-box">
                        <input type="text" name="city" id="" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="post">Post Code</label>
                      <div className="input-box">
                        <input type="text" name="post" id="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            {/* personal details close here*/}
            {/* Bank details start here*/}
            {activeStep === 1 &&
              <div className="payment">
                <div className="bankDetails m-5 py-5">
                  <div className="cardDetails">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-7 col-md-6 cardHeading">
                          <div className="cardId d-flex">
                            <input type="radio" name="card" id="card" />
                            <h3 className='ms-4'>Creadit Card</h3>
                          </div>
                          <p>Safe money transfer using your your bank accont. Visa, Maestro, Discover, American Express.</p>
                        </div>
                        <div className="col-xl-5 col-md-6 mt-2 cardImgContent d-flex justify-content-lg-end justify-content-sm-center">
                          <div className="cardImg">
                            <img src={master} alt="" />
                            <img src={visa} alt="" />
                            <img src={america} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="row cNumber mt-3">
                        <label htmlFor="cNumber">CARD NUMBER</label>
                        <div className="cardInput-box">
                          <input type="text" name="cNumber" id="cNumber" placeholder='0000 0000 0000 0000' />
                        </div>
                        <div className="cardIcon ms-auto ">
                          <img src={creaditCard} alt="" />
                        </div>
                      </div>
                      <div className="row cName">
                        <div className="col-xl-6 col-md-6 mt-2">
                          <label htmlFor="cName">NAME ON CARD</label>
                          <div className="cardInput-box">
                            <input type="text" name="cName" id="cName" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-md-6 mt-2">
                          <div className="row">
                            <div className="col-xl-6 col-md-6 mt-2">
                              <label htmlFor="exDate">EXPIRY DATE</label>
                              <div className="cardInput-box">
                                <input type="text" name="exDate" id="exDate" />
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6 mt-2">
                              <label htmlFor="cvv">CVV CODE</label>
                              <div className="cardInput-box">
                                <input type="text" name="cvv" id="cvv" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Bank paypal details here */}
                <div className="bankDetails m-5 py-5">
                  <div className="cardDetails">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-7 col-md-6 cardHeading">
                          <div className="cardId d-flex">
                            <input type="radio" name="card" id="paypal" />
                            <h3 className='ms-4'>Paypal</h3>
                          </div>
                          <p>You will be redirect to paypal website to complete your purchase securely</p>
                        </div>
                        <div className="col-xl-5 col-md-6 mt-2 cardImgContent d-flex justify-content-lg-end justify-content-sm-center">
                          <div className="cardImg">
                            <img src={paypal} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            {/* Final Step */}
            {activeStep===2 &&
              <div className="finalStep text-center">
                <h1>Congratulation!</h1>
                <h2>Your Plan has been purchase successfully.</h2>
              </div>
            }
          </form>
        </div>
        <div className="nextbtn d-flex justify-content-around py-2">
          <button onClick={previusStep} className='joinBtn text-black'>Previus</button>
          {activeStep<2 &&
            <button onClick={nextStep} className='joinBtn text-black'>{activeStep===1 ? 'Submit' : 'Next'}</button>
          }
          
        </div>
      </Box>
    </div>

  );
};

export default Stepperr;