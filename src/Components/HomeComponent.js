import React, { useState } from 'react';
import { Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption } from 'reactstrap';


const items = [
    {
        src:"/assets/images/carousel/vyasam.jpg",
        alt:"graduation-2018",
        caption:"Graduation-2018"
    },
   {
       src:"/assets/images/carousel/vyasam.jpg",
       alt:"curriculum",
       caption:"Curriculum"
   },
   {
       src:"/assets/images/carousel/vyasam.jpg",
       alt:"Schools open",
       caption:"Schools open"

   }
    
];

function HomeComponent(props) {
    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

const next = () => {
    if(animating) return;
    const nextIndex =   activeIndex===items.length-1 ? 0 :activeIndex +1 ;
    setActiveIndex(nextIndex);
}
 const previous  = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
 }
 
 const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="d-block w-100" src={item.src} alt={item.alt} />
        <CarouselCaption  captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  return (
      <div className="container">
          <div className="row">
              <div className="col-md-7 mx-auto">
              <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
              </div>
          </div>
      </div>
  );

}
export  default HomeComponent;