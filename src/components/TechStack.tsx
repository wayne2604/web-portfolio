import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const imageUrlsRow1 = [
  "/Icons/react.png",
  "/Icons/pic.png",
  "/Icons/arduino.png",
  "/Icons/php.png",
  "/Icons/js.png",
  "/Icons/kotlin.png",
  "/Icons/SQL.png",
  "/Icons/supabase.png",
];

const imageUrlsRow2 = [
  "/Icons/firebase.png",
  "/Icons/make.png",
  "/Icons/circleback.png",
  "/Icons/Sketchup.jpg",
  "/Icons/python.png",
  "/Icons/html.png",
  "/Icons/css.png",
  "/Icons/slack.png",
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2> My Techstack</h2>
      <div className="tech-slider-container">
        
        {/* Top Row */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 40 },
            768: { slidesPerView: 4, spaceBetween: 50 },
            1024: { slidesPerView: 5, spaceBetween: 60 },
          }}
          className="mySwiper tech-row-1"
        >
          {imageUrlsRow1.map((url, i) => (
            <SwiperSlide key={i}>
              <div className="tech-slide">
                <img src={url} alt={`Tech icon ${i}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Row */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 40 },
            768: { slidesPerView: 4, spaceBetween: 50 },
            1024: { slidesPerView: 5, spaceBetween: 60 },
          }}
          className="mySwiper tech-row-2"
        >
          {imageUrlsRow2.map((url, i) => (
            <SwiperSlide key={i}>
              <div className="tech-slide">
                <img src={url} alt={`Tech icon ${i}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default TechStack;
