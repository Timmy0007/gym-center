import star from '../../assets/star.png'
import face from '../../assets/face.png'

export const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 700, min: 400 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const memberdata = [
    {
      id: 1,
      star: star,
      face: face,
      description: '"Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat."',
      man: 'Jonathan Edward',
      work: 'Office worker'

    },
    {
        id: 2,
        star: star,
        face: face,
        description: '"Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat."',
        man: 'John Murphy',
        work: 'Office assistant'
    },
    {
        id: 3,
        star: star,
        face: face,
        description: '"Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat."',
        man: 'Jon Snow',
        work: 'director'
    },
    
  ];