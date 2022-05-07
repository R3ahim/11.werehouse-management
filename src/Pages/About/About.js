import React from 'react';

import './About.css'
import PageTitle from '../Shared/PageTitle/PageTitle';
import profile from '../../images/prfile.jpg'

const About = () => {
    return (
        <div>
            <PageTitle title="About"></PageTitle>
            <div  className='dash-header'>
            <h2>About us</h2>
            <p className='fs-5'>Our daily order minimum 50m car. it is the biggest achimnet for us </p>
            <p>Its the begest car company ever in the world</p>
            
        </div>
            <div className='about'  >
                <img className={'rounded'}src={profile} style={{width:'400px'}} alt="" />
                <h3 className='mt-5'>The CEO of our car company of APNA CAR</h3>
                <h5><span>ABOUT: </span>My name is ABDUR RAHIM. i am a student of class ten | i am the ceo of apna car company and beside i am   FRONTEND WEBDEVELOPER </h5>

            </div>
        </div>
    );
};

export default About;

