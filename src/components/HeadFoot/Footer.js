import React, { Component } from 'react';

import logo1 from '../../assets/Logo-01.png';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="left">
                    <img src={logo1} alt="Secondary Logo" className="footer-logo" />
                </div>
                <div className="right">
                    Email: theenglishhouse@gmail.com<br/>
                    Phone: 02 041 6869<br/>
                    Address: Min Buri, Bangkok 10510
                </div>
            </footer>
        )
    }
}
