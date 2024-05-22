import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../images/01.jpg";
import img2 from "../../images/02.jpg";
import img3 from "../../images/03.png";
import img4 from "../../images/04.jpg";
import img5 from "../../images/05.png";
import img6 from "../../images/06.png";

const carouselItem = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
];

export default function Banner() {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
    >
      {carouselItem.map((item, idx) => (
        <div key={idx}>
          <img src={item.image} />
        </div>
      ))}
    </Carousel>
  );
}
