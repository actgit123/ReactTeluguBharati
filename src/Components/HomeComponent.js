import React, { useState } from 'react';
import { Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption, Collapse, Card,CardHeader,CardBody } from 'reactstrap';
import { items } from '../shared/images';
import { news } from '../shared/News';


function HomeComponent(props) {
   //carousel state 
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  //latest news state
  const [collapse,setCollapse]=useState(0);
  //const cards=[1,2,3];
  
  const toggle = (e) => {
    let event = e.target.dataset.event;
        setCollapse( collapse === Number(event) ? 0 : Number(event) );
  }


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
              <div class="col col-md-5">
                               
                     <h2 class="bg-info">Latest News</h2>
                    
                        {news.map((item) => {
                             return (
                                         <Card style={{ marginBottom: '1rem' }} key={item.id}>
                                          <CardHeader style={{ color: 'blue' }} onClick={toggle} data-event={item.id}>{item.header}</CardHeader>
                                           <Collapse isOpen={collapse === item.id}>
                                            <CardBody>
                                            {item.information}
                                           </CardBody>
                                              </Collapse>
                                             </Card>
                                     );
                             } )}
                     </div>
          </div>
      </div>
  );

}
export  default HomeComponent;