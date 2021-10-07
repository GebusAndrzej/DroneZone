import React, { useState } from 'react'

import './Home.css';
import '../LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlay } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SvgScroll } from '../../../assets/icons/scrollIcon.svg'


const Home = () => {
    const [menuState, setMenuState] = useState(false)

    return (
        <section className="MainContainer Home_section" id="Home">
            <div className="Home_Container">
                <nav className="Home_Nav">
                    <div className="Home_Logo">Drone Zone</div>
                    <div className="Home_BurgerMenu">
                        <FontAwesomeIcon icon={faBars} onClick={() => setMenuState(!menuState)} />                    </div>
                    <div className={!menuState ? "Home_Menu" : "Home_MenuMobile"}>
                        <a href="/#Home">Home</a>
                        <a href="/#About">About</a>
                        <a href="/#Pricing">Pricing</a>
                        <a href="/#Drones">Our drones</a>
                        <a href="/#Realizations">Our realizations</a>
                        <a href="/#Contact">Contact</a>
                    </div>
                </nav>

                <div className="Home_Slogan">
                    <h2>Film your event with us!</h2>
                    <p>Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.<br /> Nunc vel nibh tempor, pharetra lectus congue, luctus orci.</p>

                    <div className="Home_ButtonBox">
                        <button className="Home_Button Home_Button-white">
                            Ask for price
                        </button>
                        <button className="Home_Button Home_Button-transparent">
                            <FontAwesomeIcon icon={faPlay} />
                            Watch video
                        </button>

                    </div>
                </div>


            </div>
            <SvgScroll />
        </section>
    )
}

export default Home
