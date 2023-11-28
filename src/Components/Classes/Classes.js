import React from 'react';
import './Classes.css';
import ShearHeader from '../Sheared/ShearHeader/ShearHeader';
import Footer from '../Sheared/Footer/Footer';
import ClassesContent from '../ClassesContent/ClassesContent';
import classes from '../../Database';
const Classes = () => {
    
    return (
        <div>
            <ShearHeader></ShearHeader>
            <div className="classHeading">
                <h2>OUR CLASSESS</h2>
            </div>
            <div className="container mt-3 py-5">
                <div className="row">
                    {
                        classes.map(classes => <ClassesContent classes={classes}></ClassesContent>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Classes;