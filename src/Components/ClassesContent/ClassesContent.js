import React, { useContext } from 'react';
import './ClassesContent.css';
import { userContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const ClassesContent = ({classes}) => {
    const [service, setService] = useContext(userContext);
    const navigate = useNavigate();

   const handleClick =async (selectClass)=>{
       await setService(selectClass);
       navigate('/service');
   }
    return (
        <div className='col-xl-4 col-md-6 mt-4'>
            <div onClick={()=>handleClick(classes)} className="classContainer m-3">
                <div className="classImage">
                    <img src={classes.img} alt="" />
                </div>
                <h2>{classes.title} <i class='bx bx-right-arrow-alt'></i></h2>
            </div>
        </div>
    );
};

export default ClassesContent;