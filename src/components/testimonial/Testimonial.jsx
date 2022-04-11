import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data2 = [
  {
    id2: 1,
    image2: AVTR1,
    text2: "Avatar One",
    naam2: "Tina Snow",
  },
  {
    id2: 2,
    image2: AVTR2,
    text2: "Avatar Two",
    naam2: "Shatta Walle",
  },
  {
    id2: 3,
    image2: AVTR3,
    text2: "Avatar Three",
    naam2: "Kwame Despite",
  },
  {
    id2: 4,
    image2: AVTR4,
    text2: "Avatar Four",
    naam2: "Nana McBrown",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {data2.map(({ id2, naam2, image2, text2 }) => {
          return (
            <SwiperSlide key={id2} className="testimonial">
              <div className="client__avatar">
                <img src={image2} alt={text2} />
              </div>
              <h5 className="client__name">{naam2}</h5>
              <small className="client__review">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                aliquam magnam voluptatibus assumenda qui non provident eveniet
                similique, maxime veniam iste neque, exercitationem, odit
                temporibus accusantium delectus aliquid quasi deleniti.
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;


