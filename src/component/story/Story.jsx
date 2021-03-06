import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { number } from 'prop-types';
import data from '../../staticData/stories';
import items from '../../staticData/storyImages';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

export default function Story(props) {
  const { index } = props;
  const { title, subTitle, text } = data[index];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    document.getElementById("main").className = 'container-fluid'
  }, [])

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
        key={`item-${idx + 1}`}
      >
        <div style={{ maxWidth: '929px' }}>
          <img src={item.src} alt={item.altText} className='img-fluid' />
        </div>
        <CarouselCaption captionText="" captionHeader={item.caption} />
      </CarouselItem>
    ) : (
        <div
          className="iframe"
          style={{ display: activeIndex === 4 ? 'block' : 'none' }}
          key={`item-${idx + 1}`}
        >
          <iframe
            width="100%"
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
    <div className="story-item">
      <h2 className="story-item__title">{title}</h2>
      <p className="story-item__subTitle">{subTitle}</p>
      <p className="story-item__text">{text}</p>
      <div className="carousel">
        <Carousel
          activeIndex={activeIndex}
          next={() => { }}
          previous={() => { }}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>

      <div className="story-item__text-and-button">
        <a
          href="https://www.homelessfonts.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="description"
        >Сайт проекта <span className='d-flex ml-2'>{<OpenInNewIcon />}</span></a>
      </div>
    </div>
  );
}

Story.propTypes = {
  index: number.isRequired,
};
