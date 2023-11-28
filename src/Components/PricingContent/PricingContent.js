import React, {useContext} from 'react';
import './PricingContent.css';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../App';


const PricingContent = ({ pricePlan }) => {
    const [service, setService] = useContext(userContext);
    const navigate = useNavigate();
    const bgImg = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, .6)),url(${pricePlan.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px'
    };
    const purchase =async (pricePlan)=>{
        const newService = {...service};
        newService.planName = pricePlan.Name;
        newService.price = pricePlan.Price;
       await setService(newService);
       navigate('/purchase');
    }
    return (
        <div style={{cursor: 'pointer'}} className='col-md-6 col-xl-4'>
            <div onClick={()=>purchase({Name: pricePlan.planName, Price: pricePlan.price})} style={bgImg} className="m-3 py-5">
                <div className="priceContent text-center text-white pb-3">
                    <h6>BILLED MONTHLY</h6>
                    <h2>{pricePlan.planName}</h2>
                    <h1>{pricePlan.price}</h1>
                </div>
                <div className="tikContent">
                    <div className="ticContainer">
                        <h6 className='text-left'><i class='bx bx-check'></i> <span>Mobile-optimize</span></h6>
                        <h6><i class='bx bx-check'></i> <span>Best Hosting</span></h6>
                        <h6><i class='bx bx-check'></i> <span>Free Custom</span></h6>
                        <h6><i class='bx bx-check'></i> <span>OutStanding</span></h6>
                        <h6><i class='bx bx-check'></i> <span>Happy Customer</span></h6>
                    </div>
                </div>
                <div className="purchaseBtn text-center">
                    <Link><button className='joinBtn'>PURCHASE</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PricingContent;