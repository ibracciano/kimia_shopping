import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { useRef } from "react";

const Banner = () => {
  const swiperRef = useRef(null);

  //   console.log(swiperRef);

  let settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // mettre un autoplay à true pour que les images défilent seules
    autoplay: true,
  };
  return (
    <main className="max-w-[1400px] overflow-hidden relative">
      <div>
        <Slider {...settings} ref={swiperRef}>
          <div className="relative w-full h-screen bg-pink-300">
            <img src={img1} alt="img1" className="object-cover w-full h-full" />

            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-screen text-white bg-pink-500 bg-opacity-40">
              <h1 className="text-2xl font-bold md:text-6xl ">
                A wide range of products
              </h1>
              <p className="mt-5 text-xl">New Arrival</p>
              <button className="border-2 w-[40%] lg:w-[15%] mt-[2rem] h-[70px] hover:bg-pink-500">
                Shop now
              </button>
            </div>
          </div>

          <div className="relative w-full h-screen bg-pink-300">
            <img src={img2} alt="img1" className="object-cover w-full h-full" />

            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-screen text-white bg-pink-500 bg-opacity-40">
              <h1 className="text-4xl font-bold md:text-6xl">
                Buy via mastercard
              </h1>
              <p className="mt-5 text-xl">New Arrival</p>
              <button className="border-2 w-[40%] lg:w-[15%] mt-[2rem] h-[70px]  hover:bg-pink-500">
                Shop now
              </button>
            </div>
          </div>

          <div className="relative w-full h-screen bg-pink-300">
            <img src={img3} alt="img1" className="object-cover w-full h-full" />

            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-screen text-white bg-pink-500 bg-opacity-40">
              <h1 className="text-4xl font-bold md:text-6xl">
                Products on sale
              </h1>
              <p className="mt-5 text-xl">New Arrival</p>
              <button className="border-2 w-[40%] lg:w-[15%] mt-[2rem] h-[70px]  hover:bg-pink-500">
                Shop now
              </button>
            </div>
          </div>
        </Slider>
        <div className="absolute top-[80%] left-[40%] md:left-[45%] lg:left-[46%] flex gap-5 text-white">
          <HiOutlineArrowLongLeft
            size={30}
            className="w-10 h-10 p-1 border-2 cursor-pointer hover:bg-pink-500"
            onClick={() => swiperRef.current.slickPrev()}
          />
          <HiOutlineArrowLongRight
            size={30}
            className="w-10 h-10 p-1 border-2 cursor-pointer hover:bg-pink-500"
            onClick={() => swiperRef.current.slickNext()}
          />
        </div>
      </div>
    </main>
  );
};

export default Banner;
