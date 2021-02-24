import React, { Component } from 'react';

import textContact from '../../assets/TextContacts.png';
import './Contact.css';

const onSubmit = e => {
    console.log("poop");
}

export default class Contact extends Component {
    render() {
        return (
            <div>
                <img src={textContact} alt="Contact Title" className="textContact" />

                <div className="map">
                    <iframe title="English House location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123982.78454930637!2d100.68229776858203!3d13.811273025655895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6454868a91d7%3A0x30100b25de24e20!2sMin%20Buri%2C%20Bangkok%2010510%2C%20Thailand!5e0!3m2!1sen!2sus!4v1608081793066!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>

                <div className="bottom-row">
                    <div className="owner-card">
                        <div className="profile-image"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend magna in lorem fermentum, ut mattis turpis aliquet. Morbi bibendum, nisi sed dapibus luctus, turpis sem rutrum diam, in euismod lacus tortor vitae purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend magna in lorem fermentum, ut mattis turpis aliquet.</p>
                    </div>

                    <form className="contact-form" onSubmit={onSubmit}>
                        <h1>Email Us!</h1>
                        <div className="form-group">
                            <label htmlFor="text">Name:</label>
                            <input type="text"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">Email:</label>
                            <input type="text"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">Inquiries:</label>
                            <textarea></textarea>
                        </div>
                        <button className="contact-send">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}
