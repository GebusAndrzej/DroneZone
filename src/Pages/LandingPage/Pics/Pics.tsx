import React from 'react'

import './Pics.css'

const Pics = () => {
    return (
        <section className="MainContainer Pics_MainContainer">
            <div className="Pics_Container">

                <div className="Pics_Section">

                    <img src="/assets/images/foto_top.png" alt="foto" className="Pics_leftpic" />
                    <div></div>
                    <div className="Pics_TextBox">
                        <h2>Nature from the air</h2>
                        <p>
                            Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan.
                        </p>

                    </div>
                </div>

                <div className="Pics_Section">
                    <div className="Pics_TextBox">
                        <h2>City from the air</h2>
                        <p>
                            Mauris consequat libero metus, nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan. Integer sit amet lacus egestas, semper est quis, viverra ex. Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.
                        </p>
                    </div>
                    <img src="/assets/images/foto_bot.png" alt="foto" className="Pics_rightpic" />
                </div>

            </div>
        </section >
    )
}

export default Pics