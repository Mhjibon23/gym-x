import React from 'react';
import Header from '../Header/Header';
import Workout from '../Workout/Workout';
import AboutUs from '../AboutUs/AboutUs';
import Training from '../Training/Training';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../../Sheared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Workout></Workout>
            <AboutUs></AboutUs>
            <Training></Training>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;