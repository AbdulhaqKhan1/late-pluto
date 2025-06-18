import React from 'react';

const AboutPage = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Hi, I'm a passionate web developer with a deep love for creating dynamic and responsive websites. With a background in frontend technologies like React, Tailwind, JavaScript, HTML and CSS, I craft visually appealing and user-friendly web experiences. Let's build something amazing together!
        </p>
        <div className="about-images">
          <img src="src/assets/Screenshot 2025-02-23 183814.png" alt="Profile" className="about-image" />
          <img src="src/assets/ai-generated-7920023_640.jpg" alt="Technology" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;