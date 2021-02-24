import React, { Component } from 'react';

import aboutUsText from '../../assets/TextAboutUs.png';
import './AboutUs.css';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <iframe title="Placeholder" width="560" height="300" src="https://www.youtube.com/embed/VVt-5krsvhs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img src={aboutUsText} alt="About Us Title" className="aboutUsText" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet feugiat augue. Vivamus ut porta felis. Cras a consectetur purus. Sed ipsum quam, volutpat sed viverra in, interdum non diam. Donec laoreet, felis a aliquet tristique, nisi erat congue diam, in posuere justo metus sit amet odio. Aenean egestas velit sed augue consequat elementum. Phasellus eget tellus eu tellus pulvinar tincidunt et non metus. Nulla ante orci, placerat id elementum quis, semper id velit. Integer lacus tortor, convallis ut sem sed, consectetur feugiat sapien. Nulla facilisi. Donec eleifend, nibh a sodales placerat, leo ex tempus elit, id finibus massa felis id felis. Quisque posuere sed justo eget laoreet.<br/>
                Duis finibus bibendum sapien vitae ultricies. Nullam at maximus diam. Integer semper nisi id fermentum ultricies. Quisque vulputate elit eu eros varius accumsan. Donec auctor mauris nibh, nec tincidunt mauris pellentesque non. Nunc vehicula quam sed aliquam feugiat. Suspendisse accumsan feugiat risus vitae porttitor.  </p>
            </div>
        )
    }
}
