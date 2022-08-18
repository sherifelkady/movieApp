// some-inner-component.jsx
import { React } from "react";
import { useSwiper } from "swiper/react";
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";

export default function SlideNav() {
  const swiper = useSwiper();

  return (
    <div className="z-40 flex justify-between w-20 top-44 absolute right-6">
      <button
        className="border rounded opacity-70 border-gray-600 p-2"
        onClick={() => swiper.slidePrev()}
      >
        <HiArrowSmLeft className="text-xl text-gray-200" />
      </button>

      <button
        className="opacity-70 border rounded border-gray-600 p-2"
        onClick={() => swiper.slideNext()}
      >
        <HiArrowSmRight className="text-xl text-gray-200" />
      </button>
    </div>
  );
}
