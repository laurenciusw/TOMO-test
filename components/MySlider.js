import Slider from "react-slick";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";

export default function MySlider() {
  return (
    <>
      <div className="relative">
        <Slider>
          <Card1 />
          <Card2 />
          <Card3 />
        </Slider>
      </div>
    </>
  );
}
