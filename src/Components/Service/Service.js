import React, { useContext } from 'react';
import './Service.css';
import ShearHeader from '../Sheared/ShearHeader/ShearHeader';
import { userContext } from '../../App';
import ServiceTime from '../ServiceTime/ServiceTime';
import Footer from '../Sheared/Footer/Footer';
import { Link } from 'react-router-dom';

const Service = () => {
    const schedule = [
        {
            date: 'Monday',
            time: '8:00 AM - 9:00 AM'
        },
        {
            date: 'Tuesday',
            time: '10:00 AM - 11:00 AM'
        },
        {
            date: 'Wednesday',
            time: '7:00 AM - 8:00 AM'
        },
        {
            date: 'Thursday',
            time: '5:00 PM - 6:00 PM'
        },
        {
            date: 'Friday',
            time: '6:00 AM - 7:00 AM'
        },
        {
            date: 'Saturday',
            time: '7:00 PM - 8:00 PM'
        },
    ]
    const [service, setService] = useContext(userContext)
    return (
        <div>
            <ShearHeader></ShearHeader>
            <div className="classHeading">
                <h2 style={{fontSize: '3rem'}}>{service.title}</h2>
            </div>
            <div className="container mt-3 py-5">
                <div className="row">
                    <div className="col-xl-6 col-md-6">
                        <div className="serviceContent m-2">
                            <div className="serviceImg">
                                <img className='img-fluid' src={service.img} alt="" />
                            </div>
                            <p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et illum qui magni, libero recusandae sed deleniti reiciendis, aliquid eligendi, explicabo porro vero amet nam totam maiores error blanditiis id dignissimos itaque dolorem quam? Dicta in ipsum veniam maxime. Inventore natus quibusdam, accusantium possimus numquam exercitationem impedit ratione ab vero dignissimos.</p>
                            <div className="bulletPoint">
                                <h6 className='mt-4'><i className='bx bxs-check-square' style={{color: '#FCD842'}}></i><span className='ms-3'>Having Similer Shapely Thighs</span> </h6>
                                <h6 className='mt-4'><i className='bx bxs-check-square' style={{color: '#FCD842'}}></i><span className='ms-3'>Getting Stronger Body</span> </h6>
                                <h6 className='mt-4'><i className='bx bxs-check-square' style={{color: '#FCD842'}}></i><span className='ms-3'>Increased Metabolism</span> </h6>
                                <h6 className='mt-4'><i className='bx bxs-check-square' style={{color: '#FCD842'}}></i><span className='ms-3'>Increased Muscular Endurance</span> </h6>
                                <h6 className='mt-4'><i className='bx bxs-check-square' style={{color: '#FCD842'}}></i><span className='ms-3'>Maximum Results in Less Time</span> </h6>
                                <h6 className='mt-4'><i className='bx bxs-check-square' style={{color: '#FCD842'}}></i><span className='ms-3'>Firm Hips and Tummy</span> </h6>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 mt-2 right">
                        <div className="serviceContent m-2">
                            <h2><span style={{color: '#FCD842'}}>CLASS</span> SCHEDULE</h2>
                        </div>
                        <div className="row mt-5">
                            {
                                schedule.map(schedules => <ServiceTime schedules={schedules}></ServiceTime>)
                            }
                        </div>
                        <div className="joinUsbtn ms-3">
                            <Link to={'/price'}><button style={{color: 'black'}} className='joinBtn'>JOIN US</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Service;