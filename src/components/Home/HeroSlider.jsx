import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';

const HeroSlider = () => {
    return (
        <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={50}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
    >
      <SwiperSlide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/J2N4mG4/cool-background-2.jpg')",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold text-black">
                Discover Your Path
              </h1>
              <p className="mb-5 text-white">
                Unlock your true potential with expert career counseling.
                Explore personalized guidance, resources, and tools to navigate
                your professional journey with confidence.
              </p>
              <Link to="/" clas>
                <button className="btn bg-success-dark hover:bg-success-primary-500 text-black border-none">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/BN13BZ8/cool-background.png')",
          }}
        >
          <div className=""></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Shape Your Future
              </h1>
              <p className="mb-5 text-white">
                Find clarity in your career decisions with tailored advice and
                insights. Your aspirations deserve the right direction—start
                building your dream future today.
              </p>
              <Link to="/consultation" class>
                <button className="btn bg-success-dark hover:bg-success-primary-500 text-white border-none">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/nMsHJQr/cool-background-1.png')",
          }}
        >
          <div className=""></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Empowering Career Choices
              </h1>
              <p className="mb-5 text-white">
                Connect with career experts and access top-notch resources to
                make informed decisions. Your success starts with the right
                guidance—let’s take the first step together.
              </p>
              <Link to="/consultation" clas>
                <button className="btn bg-success-dark hover:bg-success-primary-500 text-white border-none">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}



export default HeroSlider;