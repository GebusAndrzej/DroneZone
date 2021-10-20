import React from 'react'

import './Drone.css'

const Drone = () => {
    return (
        <section className="MainContainer Drone_section">
            <div className="Drone_wrapper">
                <div>
                    <h2 className="Drone_Title">Nature from the air</h2>
                    <p className="Drone_Subtitle">
                        Mauris consequat libero metus, nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan. Integer sit amet lacus egestas, semper est quis, viverra ex.                    </p>

                    <div className="Drone_Bulletpoints">
                        <div className="Drone_row">
                            <div className="Drone_Bp">Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci.</div>
                            <div className="Drone_Bp">Mauris consequat libero metus, nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan.</div>
                            <div className="Drone_Bp">Integer sit amet lacus egestas, semper est quis, viverra ex. Mauris consequat libero metus, nec ultricies sem efficitur quis.</div>
                        </div>
                        <div className="Drone_row">
                            <div className="Drone_Bp">Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.</div>
                            <div className="Drone_Bp">Mauris consequat libero metus, nec ultricies sem efficitur quis.</div>
                        </div>
                    </div>

                </div>
                <img src="/assets/images/Drone.png" alt="Drone" />
            </div>
        </section>
    )
}

export default Drone
