import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { number } from 'prop-types';
import { Link } from 'react-router-dom';

import data from '../../staticData/stories';
import items from '../../staticData/storyImages';
import Footer from '../../container/footer/Footer2';

const style = {
  bottom: '-17%',
};


export default function Story(props) {
  const { index } = props;
  const { title, subTitle, text } = data[index];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, idx) => (
    idx !== items.length - 1 ? (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={idx++}
      >
        <img src={item.src} alt={item.altText} style={{ width: '100%', height: '400px' }} />
        <CarouselCaption captionText="" captionHeader={item.caption} />
      </CarouselItem>
    ) : (
      <div className="iframe" style={{ display: activeIndex === 4 ? 'block' : 'none' }} key={idx++}>
        <iframe
          width="700"
          height="400"
          src={activeIndex === 4 ? 'https://www.youtube.com/embed/NqQ4bFkb9FU' : ''}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
    )

  ));


  return (
    <>
      <div className="story-item">
        <h2 className="story-item__title">{title}</h2>
        <p className="story-item__subTitle">{subTitle}</p>
        <p className="story-item__text">{text}</p>
        <div className="carousel">
          <Carousel
            activeIndex={activeIndex}
            next={() => {}}
            previous={() => {}}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
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
      <Footer style={style} />
    </>
  );
}

Story.propTypes = {
  index: number.isRequired,
};
