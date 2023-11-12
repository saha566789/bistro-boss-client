import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTittle from '../../../Components/SectionTittle/SectionTittle';

const Category = () => {
    return (
     <section>
        <SectionTittle    
        subHeading={"From 11:00am to 10:00pm"}>
     
        </SectionTittle>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <h3 className='text-4xl uppercase -mt-24 ml-16 text-white'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" />
            <h3 className='text-4xl uppercase -mt-24 ml-16 text-white'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt="" />
            <h3 className='text-4xl uppercase  -mt-24 ml-16 text-white'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt="" />
            <h3 className='text-4xl uppercase -mt-24 ml-16 text-white'>dessert</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5} alt="" />
            <h3 className='text-4xl uppercase  -mt-24 ml-16 text-white'>Salads</h3>
        </SwiperSlide>
        
      </Swiper>
     </section>
    );
};

export default Category;