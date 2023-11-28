import React from 'react';
import './Workout.css';
import wicon1 from '../../../Resource/images/wicon1.png';
import wicon2 from '../../../Resource/images/wicon2.png';
import wicon3 from '../../../Resource/images/wicon3.png';
const Workout = () => {
    return (
        <div className='mt-4 py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xl-4 my-2">
                        <div className="workout p-4">
                            <div className="workoutContainer1">
                                <div className="wmainContainer text-center">
                                    <div className="workIcon1">
                                        <img src={wicon1} alt="" />
                                    </div>
                                    <h2>PROGRESSION</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam tempore consequuntur eligendi nobis, dicta quidem harum quos commodi vel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 my-2">
                        <div className="workout p-4">
                            <div className="workoutContainer2">
                                <div className="wmainContainer text-center">
                                    <div className="workIcon">
                                        <img src={wicon2} alt="" />
                                    </div>
                                    <h2 style={{color: '#FCD842'}}>WORKOUT</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam tempore consequuntur eligendi nobis, dicta quidem harum quos commodi vel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 my-2">
                        <div className="workout p-4">
                            <div className="workoutContainer3">
                                <div className="wmainContainer text-center">
                                    <div className="workIcon3">
                                        <img src={wicon3} alt="" />
                                    </div>
                                    <h2>NUTRITION</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam tempore consequuntur eligendi nobis, dicta quidem harum quos commodi vel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workout;