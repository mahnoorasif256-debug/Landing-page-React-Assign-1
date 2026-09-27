import React from 'react'
import girl from '../images/hero image.png'
import lipstick from '../images/h1.png'
import foundation from '../images/h3.png'
import highlighter from '../images/h4.png'
import palette from '../images/h2.png'
import petal0 from "../images/petal_0.webp";
import petal1 from "../images/petal_1.webp";
import petal2 from "../images/petal_2.webp";
import petal3 from "../images/petal_3.webp";
import petal4 from "../images/petal_4.webp";
import petal5 from "../images/petal_5.webp";
import styles from './Hero.module.css';

const petals = [
  { src: petal0, left: "4%",  width: "32px", duration: "9s",    delay: "0s" },
  { src: petal1, left: "16%", width: "40px", duration: "12s",   delay: "2s" },
  { src: petal2, left: "30%", width: "28px", duration: "8s",    delay: "4.5s" },
  { src: petal3, left: "62%", width: "36px", duration: "11s",   delay: "1.2s" },
  { src: petal4, left: "78%", width: "24px", duration: "7.5s",  delay: "0.8s" },
  { src: petal5, left: "90%", width: "34px", duration: "9.5s",  delay: "5s" },
  { src: petal0, left: "48%", width: "22px", duration: "8.7s",  delay: "6s" },
];

const Hero = () => {
  return (
    <section id='home' className={`hero_section w-100 py-2 ${styles.hero_scope}`}
  style={{ backgroundColor: "#fdf8f8" }}>
      <div className="container py-2">
        <div className="row align-items-center justify-content-between">

          {/* Left Side: Text Content */}
          <div className="col-md-5 text-center text-md-start  ">
            <h1 className="display-3 fw-bold text-dark " style={{ fontFamily: "serif", lineHeight: "1.1" }}>
              Discover Your <br />True Radiance
            </h1>
            <p className="text-secondary mb-4 fs-5 fw-light lh-base" style={{ maxWidth: "450px" }}>
              Unveil the glow within with Noor Glow's premium, skin-loving makeup and skincare essentials. Crafted for confidence, designed for beauty.
            </p>
          <div className="d-flex gap-3 justify-content-center justify-content-md-start">
 <button className={`${styles.reward_btn}`}>
  <span className={styles.icon_container}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 60 20"
      className={`${styles.box_top} ${styles.box}`}
    >
      <path strokeLinecap="round" strokeWidth="4" stroke="#d48395" d="M2 18L58 18"></path>
      <circle strokeWidth="5" stroke="#d48395" fill="#171717" r="7" cy="9.5" cx="20.5"></circle>
      <circle strokeWidth="5" stroke="#d48395" fill="#171717" r="7" cy="9.5" cx="38.5"></circle>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 58 44"
      className={`${styles.box_body} ${styles.box}`}
    >
      <mask fill="white" id="box-mask">
        <rect rx="3" height="44" width="58"></rect>
      </mask>
      <rect mask="url(#box-mask)" strokeWidth="8" stroke="#d48395" fill="#171717" rx="3" height="44" width="58"></rect>
      <line strokeWidth="6" stroke="#d48395" y2="29" x2="58" y1="29" x1="0"></line>
      <path strokeLinecap="round" strokeWidth="5" stroke="#d48395" d="M45.0005 20L36 3"></path>
      <path strokeLinecap="round" strokeWidth="5" stroke="#d48395" d="M21 3L13.0002 19.9992"></path>
    </svg>

    <span className={styles.coin}></span>
  </span>
  <span className={styles.reward_text}>Shop Collection</span>
</button>

  <button
    className={`btn rounded-pill fw-bold ${styles.explore_btn}`}
    style={{
      padding: "16px 40px",
      fontSize: "16px",
    }}
  >
    <span className={styles.circle}></span>
    <span className={styles.circle}></span>
    <span className={styles.circle}></span>
    <span className={styles.circle}></span>
    <span className={styles.circle}></span>
    <span className={styles.btn_text}>Explore Skincare</span>
  </button>
</div>
          </div>

          {/* Right Side: Image Content with floating products + petals */}
          <div className="col-md-6 position-relative text-center hero_visual">

            {/* Background Shape Element */}
            <div
              className="position-absolute rounded-circle d-none d-md-block"
              style={{
                width: "400px",
                height: "400px",
                backgroundColor: "#fcebeb",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
                opacity: 0.5,
              }}
            ></div>

            {/* Falling rose petals — each is its own cropped, transparent petal image */}
            <div className="petals" aria-hidden="true">
              {petals.map((p, i) => (
                <img
                  key={i}
                  src={p.src}
                  className="petal"
                  style={{
                    left: p.left,
                    width: p.width,
                    animationDuration: p.duration,
                    animationDelay: p.delay,
                  }}
                  alt=""
                />
              ))}
            </div>

            {/* The Hero Image (model) */}
<img 
  src={girl}
  alt="Noor Glow Model wearing makeup"
  className="img-fluid position-relative hero_model"
  style={{
    maxHeight: "480px",
    width: "auto",
    objectFit: "contain",
    zIndex: 1,
    filter: "drop-shadow(0px 15px 30px rgba(0,0,0,0.1))",
  }}
/>
            {/* Floating product images — no box/card, just the product art */}
            <img src={lipstick} alt="Lipstick" className="floating_product fp_lipstick" />
            <img src={palette} alt="Eyeshadow palette" className="floating_product fp_palette" />
            <img src={foundation} alt="Foundation" className="floating_product fp_foundation" />
            <img src={highlighter} alt="Highlighter" className="floating_product fp_highlighter" />

          </div>

        </div>
      </div>

       <div className="d-flex flex-wrap align-items-center gap-5 px-5  pb-5 feature" style={{ borderColor: '#f0d8dc' }}>
  
  {/* Feature 1 */}
  <div className="d-flex align-items-center">
    <span className="fs-5  " style={{ color: '#0c0b0c' }}><svg
  xmlns="http://www.w3.org/2000/svg"
  width="44"
  height="44"
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
 strokeWidth="2"
  strokeLinecap="round"
 strokeLinejoin="round"
  aria-label="Pagelines outline icon"
>
  <path d="M24 42V21" />
  <path d="M24 32C17 32 12 28 12 21c7 0 12 4 12 11Z" />
  <path d="M24 25c0-7 5-12 12-12 0 7-5 12-12 12Z" />
  <path d="M24 19c-5 0-9-3-9-8 5 0 9 3 9 8Z" />
  <path d="M24 15c0-5 3-9 8-9 0 5-3 9-8 9Z" />
</svg>
</span>
    <div className='ms-0'>
      <h6 className="mb-0 fw-bold text-dark" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>CLEAN INGREDIENTS</h6>
      <small className="text-secondary" style={{ fontSize: '11px' }}>Effortless you.</small>
    </div>
  </div>

  {/* Feature 2 */}
  <div className="d-flex align-items-start  gap-2">
    <span className="fs-5" style={{ color: '#070707' }}><i className="fa-regular fa-heart"></i></span>
    <div>
      <h6 className="mb-0 fw-bold text-dark" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>CRUELTY FREE</h6>
      <small className="text-secondary" style={{ fontSize: '11px' }}>100% Ethical</small>
    </div>
  </div>

  {/* Feature 3 */}
  <div className="d-flex align-items-center gap-2">
    <span className="fs-5" style={{ color: '#070707' }}><svg xmlns="http://www.w3.org/2000/svg"
     width="32" height="32" viewBox="0 0 24 24"
     fill="none" stroke="currentColor" strokeWidth="1.3"
    strokeLinecap="round" strokeLinejoin="round"
     aria-label="Flask outline">
  <path d="M9 3h6M10 3v6.2L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.2V3"/>
  <path d="M7 15h10"/>
</svg>

</span>
    <div>
      <h6 className="mb-0 fw-bold text-dark" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>DERMATOLOGICALLY</h6>
      <small className="text-secondary" style={{ fontSize: '11px' }}>Tested & Safe</small>
    </div>
  </div>

</div>  
    </section>
  );
};

export default Hero;