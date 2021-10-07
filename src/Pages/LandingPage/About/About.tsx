import React from 'react'

import '../LandingPage.css'
import './About.css'

const About = () => {
    return (
        <section className="MainContainer bg1 About_section" id="About">
            <div>
                <div className="About_Drones">
                    <div className="About_DroneCard">
                        <figure>
                            <img src="assets/images/icons/drone-1.png" alt="item" />
                        </figure>
                        <h3>From Air</h3>
                        <p>Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.</p>
                    </div>

                    <div className="About_DroneCard">
                        <figure>
                            <img src="assets/images/icons/drone-2.png" alt="item" />
                        </figure>
                        <h3>Best drones</h3>
                        <p>Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.</p>
                    </div>

                    <div className="About_DroneCard">
                        <figure>
                            <img src="assets/images/icons/propeller.png" alt="item" />
                        </figure>
                        <h3>Speed</h3>
                        <p>Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.</p>
                    </div>

                    <div className="About_DroneCard">
                        <figure>
                            <img src="assets/images/icons/control.png" alt="item" />
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
