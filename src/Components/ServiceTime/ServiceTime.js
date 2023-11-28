import React from 'react';
import './ServiceTime.css';

const ServiceTime = ({schedules}) => {
    return (
        <div className='col-xl-6 col-md-12 text-center'>
            <div className="serviceSchedule m-3 py-3">
                <h1>{schedules.date}</h1>
                <h5>{schedules.time}</h5>
            </div>
            
        </div>
    );
};

export default ServiceTime;