import React from 'react';
import './ChooseUpContent.css';
const ChooseUpContent = ({choose}) => {
    return (
        <div className='col-md-6 col-xl-4'>
            <div className="chooseContent m-2 text-center">
                <div className="chooseContainer">
                    <div className="chooseImg">
                        <img src={choose.img} alt="" />
                    </div>
                    <h2>{choose.title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptates incidunt repellat mollitia ex non tenetur fuga temporibus dignissimos deserunt</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUpContent;