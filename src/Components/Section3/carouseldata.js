import cardio from '../../assets/cardio.png'
import Muscle from '../../assets/muscle.png'
import Fat from '../../assets/fat-loss.png'
import nutrition from '../../assets/nutrition.png'

export const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const CarouselData = [
    {
      id: 1,
      productimage: cardio,
      name:"Cardio Strength",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
    },
    {
      id: 2,
      productimage:Fat,
      name:"Fat Gain",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.'
    },
    {
      id: 3,
      productimage: Muscle,
      name: "Muscle Gains",
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
    },
    {
      id: 4,
      productimage: nutrition,
      name:"Nutritions",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.'
    },
    {
      id: 5,
      productimage: cardio,
      name:"Body Strength",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
    },
    
  ];