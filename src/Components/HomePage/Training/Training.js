import React from 'react';
import './Training.css';
import trainingImg1 from '../../../Resource/images/traningImg1.png';
import trainingImg2 from '../../../Resource/images/traningImg2.png';
import { useNavigate } from 'react-router-dom';
const Training = () => {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/classes')
    }
    return (
        <div className='training mt-3 py-5'>
            <div className="trainig-header">
                <h1>TRAINING <span style={{ color: "#FCD842" }}>PROGRAMS</span></h1>
                <div className="container py-2">
                    <div className="row">
                        <div className="col-md-6">
                            <div onClick={handleClick} className="trainingContent m-2">
                                <div className="trainigImg">
                                    <img className='img-fluid' src={trainingImg1} alt="" />
                                </div>
                                <div className="trainingBtn">
                                    <h2>YOGA TRAINING SESSION <i class='bx bx-right-arrow-alt'></i></h2>
                                </div>
                            </div>
                        </div>
                        <div onClick={handleClick} className="col-md-6">
                            <div className="trainingContent m-2">
                                <div className="trainigImg">
                                    <img className='img-fluid' src={trainingImg2} alt="" />
                                </div>
                                <div className="trainingBtn">
                                    <h2>CARDIO TRAINING SESSION <i class='bx bx-right-arrow-alt'></i></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;