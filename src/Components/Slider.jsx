import React, { useEffect } from 'react';
import styles from './Slider.module.css';
import skinimg from '../images/skinimg.jpg';
import skiniimg from '../images/skiniimg.jpg';
import slide5 from '../images//slide5.png'
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png'


const Slider = () => {
  useEffect(() => {
    const swiper = new window.Swiper('.mySwiper', {
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    const swiper2 = new window.Swiper('.mySwiper2', {
      direction: 'vertical',
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <div>
      <div className='text-center pb-5 mb-5 skin' id='skincare'>
        <h1 className={`pb-4 ${styles.head}`}>
          SkinCare <span style={{ color: '#c47184' }}>Product</span>
        </h1>

        <div className="swiper mySwiper swiper-h">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="swiper mySwiper2 swiper-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
  <img src={skinimg} alt="Skincare Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                   
                     </div>
                  <div className="swiper-slide">
 <img src={skiniimg } alt="Skincare Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                  </div>
                  <div className="swiper-slide">
<img src={slide5} alt="Skincare Product" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />

                  </div>
                  <div className="swiper-slide">
<img src={slide3} alt="Skincare Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                  </div>
                  <div className="swiper-slide">
   <img src={slide4} alt="Skincare Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="swiper-slide">
   <img src={skinimg} alt="Skincare Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

            </div>
            <div className="swiper-slide">
<img src={slide3} alt="Skincare Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;