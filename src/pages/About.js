import React, { Component } from 'react';
import './About.css';
import profile from '../assets/profile.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {profile}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Simon Jerry</div>
            <div className="brief_description">
              I'm a native of Ghana but resides in Rexburg, Idaho. Currently a Senior at Brigham Young University Idaho,
              majoring in Computer Engineering. I didn't have the privillege of experiencing technology growing up. Despite that,
              I began to develop a curios mindset about how computing devices functioned. In pursuit of my curiosity, I ended up majoring in Computer Engineering,
              which has exposed me to both the hardware and software aspect of computing systems. Although challenging and complex, I have come to 
              develop a passion for smart computing technology. During my leisure, I like going on hiking, playing soccer, 
              gym workout, snowboarding, water rafting, and many more.

            </div>
          </div>
        </div>
      </div> 
      </div>
    )
  }
}