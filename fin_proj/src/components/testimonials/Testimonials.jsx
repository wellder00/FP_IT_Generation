import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCube } from 'swiper';
import { Cards } from '../index';
import 'swiper/scss';
import 'swiper/scss/navigation';

function Testimonials(props) {
  let users = [
    {
      id: 227,
      src: '/src/img/man.jpg',
      title: 'Louis Saville',
      work: '/CEO at Google inc',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.`,
    },
    {
      id: 228,
      src: '/src/img/women.jpg',
      title: 'Rekha Varadwaz ',
      work: '/Manager at Nike inc',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.`,
    },
    {
      id: 229,
      src: '/src/img/women.jpg',
      title: 'SMB2',
      work: '/PM at Google inc',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua.`,
    },
    {
      id: 230,
      src: '/src/img/man.jpg',
      title: 'SMB3',
      work: '/QA at Nike inc',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua.`,
    },
    {
      id: 231,
      src: '/src/img/man.jpg',
      title: 'Nik',
      work: '/CEO at Google inc',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua.`,
    },
    {
      id: 232,
      src: '/src/img/women.jpg',
      title: 'Mary',
      work: '/CEO at Google inc',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua.`,
    },
  ];

  return (
    <div className="testimonials">
      <div className="testimonials__wrapper _container">
        <section>TESTIMONIALS</section>
        <h2>Client says about us</h2>
        <div className="testimonials__cards-block">
          <div className="button_block">
            <button className="prev_button">
              <img src="/src/icon/vd.svg" alt="vector" />
            </button>
            <button className="next_button">
              <img src="/src/icon/vd.svg" alt="vector" />
            </button>
          </div>
          <Swiper
            className="swiper-wrap"
            modules={[Navigation, EffectCube]}
            spaceBetween={0}
            slidesPerView={2}
            slidesPerGroup ={2}
            speed = {1000}
            loop={true}
            navigation={{
              prevEl: '.prev_button',
              nextEl: '.next_button',
            }}
            
            
            // effect="cube"
          >
             {users.map((item, index) => {
            return (
              <SwiperSlide key={`${item}_${index}`}>
                <Cards selectedItem = {item} />
              </SwiperSlide>
            );
          })}           
    
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
