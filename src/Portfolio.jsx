import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className = "sliding">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block img"
          src={require('./yes.jpg')}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img"
          src={require('./yes.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img"
          src={require('./yes.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className='content_portfolio'>
      <p>
      Recipix is a cross-platform mobile application that allows a user to virtually keep track of items in their fridge. Users may add items from their fridge via barcode scanning, and the app generates a list of recipes they can create based on those ingredients. Users may filter recipes based on specific ingredients. Recommended recipes show step-by-step instructions as well as any missing ingredients. This app was created in 2.5 weeks in an agile team of 4 for a capstone project.
      </p>
      <p>
    Technologies: JavaScript, React Native, Redux, Expo, Sequelize, PostgreSQL, Node.js, Express, Edamam API, Spoonacular API
      </p>
    </div>

    <div class="projectLinks">
        <a href="https://expo.io/@recipix/Recipix" target="_blank">Try Demo <img src={require('./assests/share.png')} /></a>
        <a href="https://github.com/Recipix-1909/Recipix" target="_blank">View Code <img src={require('./assests/github-sign.png')} /></a>
      </div>
      
    </div>
  );
}

export default Portfolio