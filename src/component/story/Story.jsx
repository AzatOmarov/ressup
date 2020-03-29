import React from 'react';
import { number } from 'prop-types';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import fontStoryImage from '../../assets/img/fontStoryImage.svg';
import data from '../../staticData/stories';


export default function Story(props) {
  const { index } = props;
  const { title, subTitle, text } = data[index];
  return (
    <>
      <div className="story-item">
        <h2 className="story-item__title">{title}</h2>
        <p className="story-item__subTitle">{subTitle}</p>
        <p className="story-item__text">{text}</p>
        <div className="carousel">
          <div className="carousel__item">
            <Carousel
              transitionMode="fade"
              slidesToShow="1"
              slideWidth="790px"
              cellAlign="center"
              height="500px"
            >
              <img src={fontStoryImage} alt="Ph" />
            </Carousel>
          </div>
        </div>
        <div className="story-item__text-and-button">
          <div className="description">Сайт проекта</div>
          <div className="nextButton">
            <Link to={`/stories/${index}`} className="fill">
              далее
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}

Story.propTypes = {
  index: number.isRequired,
};
