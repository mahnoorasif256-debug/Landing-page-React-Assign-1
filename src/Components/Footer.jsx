import React from 'react'
import styles from './Footer.module.css'
import footer from '../images/footer logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer_section} id='footer'>
   <div className={`${styles.trust_strip} brands`}>
    <div className={`container py-4 d-flex align-items-center justify-content-between g-5 ${styles.patti}`}>
      {/* text and brands */}
     <span className='fw-normal fs-6'>AS SEEN IN</span>
<span className={styles.font_bazaar}>BAZAAR</span>
  <span className={styles.font_elle}>ELLE</span>
  <span className={styles.font_vogue}>VOGUE</span>
  <span className={styles.font_esquire}>Esquire</span>
  <span className={styles.font_gq}>GQ</span>
  {/* icons & brands */}
  <div className='d-flex '>
<div className='mx-4'><span>◆</span></div>
<div className=' d-flex flex-column '>
 <span className='fw-semibold'>MADE IN FRANCE</span>
<span> Crafted with expertise</span>
</div>
<div className='mx-4'><span>❧</span></div>
<div className=' d-flex flex-column '>
 <span className='fw-semibold'>VEGAN &amp; CRUELTY FREE</span>
<span> Beauty with compassion</span>
</div>
</div>
    </div>
  </div> 

      {/* 2. Newsletter Strip with Background Image */}
      <div className={styles.newsletter_bg}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-5 mb-3 mb-md-0">
              <h4 className={styles.newsletter_title}>Be the first to know</h4>
              <p className={styles.newsletter_desc}>Exclusive offers, new arrivals, and latest stories.</p>
            </div>
            <div className="col-md-7">
              <div className={styles.subscribe_box}>
                <input type="email" placeholder="Enter your email address" className={styles.email_input} />
                <button className={styles.subscribe_btn}>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Footer Links Column */}
      <div className="container py-5 footer ">
        <div className="row justify-content-between fot">
          <div className="col-md-3 mb-5 mb-md-0">
            {/* <h4 className={styles.footer_brand}>Noor Glow</h4> */}
             <a className="navbar-brand d-flex align-items-center py-0" href="#" style={{ minWidth: '160px' }}>
        <img 
          src={footer} 
          alt="Noor Glow Logo" 
          style={{ height: '60px', width: 'auto', objectFit: 'contain' }} 
        />
      </a>
            <p className={`${styles.footer_brand_desc} mt-2`}>
  Luxury skincare and makeup crafted with passion and the finest ingredients to make every moment unforgettable.
</p>
            <div className={styles.social_icons}>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
            </div>
          </div>

         {/* SHOP */}
          <div className="col-md-2 col-12 mb-3 ps-5 mb-md-0">
            <h6 className={styles.col_title}>SHOP</h6>
            <ul className={styles.col_links}>
              <li><a href="#">All Products</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Gift Sets</a></li>
            </ul>
          </div>

          {/* COLLECTIONS */}
          <div className="col-md-2 col-12 mb-3 ps-5 mb-md-0">
            <h6 className={`${styles.col_title} me-4`}>COLLECTIONS</h6>
            <ul className={styles.col_links}>
              <li><a href="#">Skincare</a></li>
              <li><a href="#">Makeup</a></li>
              <li><a href="#">Lips & Eyes</a></li>
              <li><a href="#">Brushes</a></li>
            </ul>
          </div>

          {/* CUSTOMER CARE */}
          <div className="col-md-2 ps-5 col-12 mb-3 mb-md-0">
            <h6 className={`${styles.col_title} me-2`}>CUSTOMER CARE</h6>
            <ul className={styles.col_links}>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="col-md-3 ps-5 col-12">
            <h6 className={`${styles.col_title} `}>COMPANY</h6>
            <ul className={styles.col_links}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>


        </div>

        <div className="text-center pt-4 mt-4 border-top border-secondary">
          <p className={styles.copyright}>© 2026 Noor Glow. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;