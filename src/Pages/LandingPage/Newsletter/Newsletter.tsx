import React from 'react'

import './Newsletter.css'

const Newsletter = () => {
    return (
        <section className="MainContainer Newsletter_Main">
            <div className="Newsletter_Wrapper">
                <h2 className="Newsletter_Title">Sign up for our newsletter</h2>

                <div className="Newsletter_ButtonBox">
                    <input type="text" placeholder="Email address"></input>
                    <button>Send</button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
