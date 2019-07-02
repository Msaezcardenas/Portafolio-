import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contactContainer">
                <div className="contactStyle">

                    <div id="contact" className="All">
                                <a href="https://github.com/Msaezcardenas?tab=repositories" target="_blank" className="git"><i className="devicon-github-plain-wordmark github"></i></a>
                                <a href="https://www.linkedin.com/in/msaezcardenas/" target="_blank" className="git"><i class="fab fa-linkedin-in linkedin"></i></a>
                                <a href="mailto:msaezcardenas@gmail.com" target="_blank" className="git"><i class="fas fa-envelope mail"></i></a>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Contact;