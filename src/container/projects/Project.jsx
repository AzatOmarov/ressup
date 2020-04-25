import React, { useState } from 'react';
import { number } from 'prop-types';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import QALine from './time-line/QALine';
import ProjectHeader from '../../component/project/header/Header';
import items from '../../staticData/projectImages';

export default function Project(props) {
  const { index } = props;
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
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img src={item.src} alt={item.altText} style={{ width: '100%', height: '400px' }} />
      <CarouselCaption captionHeader={item.caption} />
    </CarouselItem>
  ));


  return (
    <>
      <div className="projects">
        <div>
          <ProjectHeader index={index} />
          <QALine />
        </div>
        <div className="carousel">
          <div className="carousel__item">
            <Carousel
              activeIndex={activeIndex}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
          </div>
        </div>

      </div>
    </>
  );
}

Project.propTypes = {
  index: number.isRequired,
};
