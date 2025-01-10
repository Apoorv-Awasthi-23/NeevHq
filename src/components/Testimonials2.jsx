import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from "../constants/Test-constants";

const Testimonials2 = () => {
     var settings = {
       dots: true,
       infinite: false,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: 3,
       initialSlide: 0,
       responsive: [
         
         {
           breakpoint: 1000,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2,
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
       ],
     };
    return (
      <div className="w-3/4 m-auto">
        <div className="w-full flex items-center justify-between ">
          <h2 className="text-5xl text-black font-semibold w-full text-center">
            Testimonials
          </h2>
        </div>
        <div className="mt-10 slider-container">
          <Slider {...settings}>
            {testimonialData.map((item) => (
              <div
                key={item.id}
                className="bg-white h-[40vh] text-black rounded-xl w-full px-4"
              >
                <div className="h-56 mx-4 flex flex-wrap justify-center items-center rounded-t-xl">
                  <img
                    src={item.img}
                    alt=""
                    className="h-24 w-24 rounded-full"
                  />
                  <p className="text-center">{item.desc}</p>
                </div>

                <div className=" items-center justify-center align-top text-center ">
                  <p className="text-xl font-semibold">{item.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
};

export default Testimonials2;
