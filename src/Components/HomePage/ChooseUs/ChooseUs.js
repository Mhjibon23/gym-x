import React from 'react';
import aboutImg1 from '../../../Resource/images/choose1.png';
import aboutImg2 from '../../../Resource/images/choose2.png';
import aboutImg3 from '../../../Resource/images/choose3.png';
import ChooseUpContent from '../ChooseUpContent/ChooseUpContent';
const ChooseUs = () => {
    const chooseUs = [
        {
            title: 'FREE FITNESS TRAINING',
            img: aboutImg1
        },
        {
            title: 'TONS OF CARDIO & STRENGTH',
            img: aboutImg2
        },
        {
            title: 'NO COMMITMENT MEMBERSHIPS',
            img: aboutImg3
        },
    ]
    return (
        <div className='mt-3 py-5'>
            <h1 style={{textAlign: 'center', fontFamily:'Oswald'}}><span style={{ color: "#FCD842" }}>WHY</span> CHOOSE US</h1>
            <div className="container mt-5">
                <div className="row">
                    {
                        chooseUs.map(choose => <ChooseUpContent choose={choose}></ChooseUpContent>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;