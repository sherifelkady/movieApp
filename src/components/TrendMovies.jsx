import bg from "../assets/images/home__bg.jpg";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import BigCard from "./BigCard";
// Redux
import { useSelector, useDispatch } from "react-redux";
import getTrends from "../store/actions/getTrends";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SlideNav from "./SlideNav";

export default function TrendMovies() {
  // ------------------ Hooks -------------------
  const trendMedia = useSelector((state) => state.movies.trendsList);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getTrends()), []);

  return (
    <div
      id="season-movies"
      className="h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="content px-52 h-full bg-darker opacity-95 text-white">
        <div id="new-movies" className="pt-36 relative">
          <h2 className="text-4xl font-bold py-6">Season Movies</h2>
          <div id="new-movies-list" className=" flex gap-3 justify-between">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              loop
              loopFillGroupWithBlank={true}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {trendMedia.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <BigCard {...item} />
                  </SwiperSlide>
                );
              })}
              <SlideNav />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
