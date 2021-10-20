import React from 'react'

import drone1 from '../../../assets/icons/drone-1.png';
import drone2 from '../../../assets/icons/drone-2.png';
import propeller from '../../../assets/icons/propeller.png';
import control from '../../../assets/icons/control.png';

import '../LandingPage.css'
import './About.css'

const About = () => {
    return (
        <section className="MainContainer bg1 About_section" id="About">
            <div>
                <div className="About_Drones">
                    <div className="About_DroneCard">
                        <figure>
                            <img src={drone1} alt="item" />
                        </figure>
                        <h3>From Air</h3>
                        <p>Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.</p>
                    </div>

                    <div className="About_DroneCard">
                        <figure>
                            <img src={drone2} alt="item" />
                        </figure>
                        <h3>Best drones</h3>
                        <p>Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.</p>
                    </div>

                    <div className="About_DroneCard">
                        <figure>
                            <img src={propeller} alt="item" />
                        </figure>
                        <h3>Speed</h3>
                        <p>Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.</p>
                    </div>

                    <div className="About_DroneCard">
                        <figure>
                            <img src={control} alt="item" />
                        </figure>
                        <h3>Long range</h3>
                        <p>Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.</p>
                    </div>
                </div>

                <div className="About_ButtonBox">
                    <button className="About_Button">Ask For price</button>
                </div>

            </div>
        </section>
    )
}

export default About
