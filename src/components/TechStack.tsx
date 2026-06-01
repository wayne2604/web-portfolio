import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const techRow1 = [
  { icon: "/Icons/react.png", name: "React" },
  { icon: "/Icons/pic.png", name: "PIC" },
  { icon: "/Icons/arduino.png", name: "Arduino" },
  { icon: "/Icons/php.png", name: "PHP" },
  { icon: "/Icons/js.png", name: "JavaScript" },
  { icon: "/Icons/kotlin.png", name: "Kotlin" },
  { icon: "/Icons/SQL.png", name: "SQL" },
  { icon: "/Icons/supabase.png", name: "Supabase" },
];

const techRow2 = [
  { icon: "/Icons/firebase.png", name: "Firebase" },
  { icon: "/Icons/make.png", name: "Make.com" },
  { icon: "/Icons/circleback.png", name: "Circleback" },
  { icon: "/Icons/Sketchup.jpg", name: "SketchUp" },
  { icon: "/Icons/python.png", name: "Python" },
  { icon: "/Icons/html.png", name: "HTML5" },
  { icon: "/Icons/css.png", name: "CSS3" },
  { icon: "/Icons/slack.png", name: "Slack" },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2> My Techstack</h2>
      <div className="tech-slider-container">
        <div className="tech-slider-gradient"></div>

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
          {techRow1.map((tech, i) => (
            <SwiperSlide key={i}>
              <div className="tech-slide">
                <img src={tech.icon} alt={tech.name} />
                <span className="tech-label">{tech.name}</span>
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
          {techRow2.map((tech, i) => (
            <SwiperSlide key={i}>
              <div className="tech-slide">
                <img src={tech.icon} alt={tech.name} />
                <span className="tech-label">{tech.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default TechStack;
