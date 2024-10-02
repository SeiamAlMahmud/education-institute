import { Carousel, IconButton } from "@material-tailwind/react";
import slide4Image1 from '../../assets/pexels-roman-44394990-9488343.jpg' 
import slide4Image2 from '../../assets/pexels-seymasavascioglu-11532238.jpg' 
import slide4Image3 from '../../assets/pexels-roman-44394990-9488343.jpg' 


export function CarouselCustomArrows() {
  return (
    <Carousel
      className="rounded-xl w-[90%]  mx-auto"
      loop='true'
      autoplay='true'
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src={slide4Image1}
        alt="image 1"
        className="h-[30rem] w-full object-cover object-bott"
      />
      <img
        src={slide4Image2}
        alt="image 2"
        className="h-[30rem] w-full object-cover"
      />
      <img
        src={slide4Image3}
        className="h-[30rem] w-full object-cover"
      />
    </Carousel>
  );
}