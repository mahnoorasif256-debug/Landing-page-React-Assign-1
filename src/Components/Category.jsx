import React from 'react'
import styles from './Category.module.css'
import makeup from '../images/makeup.jpg'
import skincare from '../images/skincare.jpg'
import lips from '../images/lips.jpg'
import  brushes from '../images/brushes.jpg'
import  fragrance from '../images/fragrance.jpg'
import gifts from '../images/giftseats.jpg'
import foundation from '../images/foundation.png'
import mascara from '../images/mascara.png'
import eyeshadow from '../images/eyeshadow.png'
import serum from '../images/serum.png'
import skinimg from '../images/skinimg.jpg'

const Category = () => {

    const categoriesData = [
  { title: "MAKEUP", img: makeup},
  { title: "SKINCARE", img: skincare },
  { title: "LIPS", img: lips },
  { title: "TOOLS & BRUSHES", img: brushes },
  { title: "FRAGRANCE", img: fragrance },
  { title: "GIFTS & SETS", img: gifts },
];

 const productsData = [
    { name: "Radiant Glow Foundation SPF 20", price: "$32.00", rating: "4.5", reviews: "1,230", img: foundation },
    { name: "Soft Glam Eyeshadow Palette", price: "$36.00", rating: "4.6", reviews: "856", img: eyeshadow },
    { name: "Lash Elevate Mascara", price: "$16.00", rating: "4.4", reviews: "754", img: mascara },
    { name: "Glow Boost Serum", price: "$28.00", rating: "5.0", reviews: "643", img: serum },
  ];

 return(

 <div className={styles.categories_section} id='shops'>
      <div className="container">
        <h4 className={styles.section_title}>SHOP BY CATEGORY</h4>
        <div className={styles.categories_row}>
         {categoriesData.map((cat, index) => (
  <div key={index} className={styles.category_item}>
    <div className={styles.glow_wrap}>
      <div className={styles.img_circle}>
        <img src={cat.img} alt={cat.title} className={styles.cat_img} />
      </div>
    </div>
    <h6 className={styles.cat_title}>{cat.title}</h6>
  </div>
))}
        </div>
      </div>
      {/* best seller */}
          <div className={styles.bestsellers_section} id='makeup'>
      <div className="container">

        <div className={styles.section_header}>
          <h5 className={styles.section_title}>BEST SELLERS</h5>
          <a href="#" className={styles.view_all}>VIEW ALL →</a>
        </div>

        <div className={styles.products_row}>
          {productsData.map((item, index) => (
            <div key={index} className={styles.product_card}>
              <div className={styles.img_box}>
                <img src={item.img} alt={item.name} className={styles.product_img} />
              </div>

              <p className={styles.product_name}>{item.name}</p>

              <div className={styles.rating_row}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.reviews}>({item.reviews})</span>
              </div>

             <div className={styles.bottom_row}>
  <span className={styles.price}>{item.price}</span>
</div>

<button className={styles.add_cart_btn}>
  <b>ADD TO CART</b>
</button>
            </div>
          ))}
        </div>

      </div>
    </div>

<div className='text-center pt-3 skin' id='skincare'>
          <h1 className={`pb-4 ${styles.head}`}>SkinCare <span style={{color: '#c47184'}}>Product</span></h1>

<img className='rounded-1 img-fluid' width={1700} src={skinimg} alt="skincare img" />
</div>
    </div>




 )  
  
}

export default Category;