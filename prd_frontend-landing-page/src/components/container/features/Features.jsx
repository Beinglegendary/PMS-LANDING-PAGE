import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import features from '../../../data/features';
import arrowright from '../../../assets/img/arrowright.svg';
import next from '../../../assets/img/Frame 154.svg';
import previous from '../../../assets/img/Frame 153.svg';
import './Features.css';

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % features.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const previousSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? features.length - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === features.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <section className="features-section">
      <header className="features-heading">
        <h2 className="features">Packed with amazing features just like you</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Morbi tellus metus turpis
          feugiat nec. Pellentesque dui scelerisque ut sit. Vulputate aliquet
          duis etiam in egestas auctor eu. Mi nisi vel parturient mattis.
        </p>
      </header>
      <div className="features-container">
        {features.map(({ index, image, feature }, i) => (
          <div
            className={`feature ${i === currentSlide ? 'active' : ''} ${
              i === currentSlide - 1 ||
              (currentSlide === 0 && i === features.length - 1)
                ? 'prev'
                : ''
            } ${
              i === currentSlide + 1 ||
              (currentSlide === features.length - 1 && i === 0)
                ? 'next'
                : ''
            }`}
            key={index}
          >
            <div>
              <img src={image} alt="" className="feature-icon" />
              <h3>{feature}</h3>
            </div>
            <Link>
              <span>Learn more</span>
              <img src={arrowright} alt="" />
            </Link>
          </div>
        ))}
      </div>
      <div className="carousel-btn-container">
        <img src={previous} alt="" onClick={previousSlide} />
        <img src={next} alt="" onClick={nextSlide} />
      </div>
    </section>
  );
};

export default Features;
