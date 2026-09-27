import React from 'react';
import './Main.css';
import styles from './Badges.module.css';


 const Badges = () => {
  const categoriesData = [
    { title: "MAKEUP", subtitle: "Face, Lips, Eyes", icon: "fa-solid fa-wand-magic-sparkles" },
    { title: "SKINCARE", subtitle: "Nourish & Glow", icon: "fa-solid fa-droplet" },
    { title: "BRUSHES", subtitle: "Tools for Perfection", icon: "fa-solid fa-paint-brush" },
    { title: "FRAGRANCE", subtitle: "Scent Your Story", icon: "fa-solid fa-spray-can-sparkles" },
    { title: "GIFT SETS", subtitle: "Perfectly Curated", icon: "fa-solid fa-gift" },
  ];


  return (
    <div className={styles.categories_section }>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-4 py-3">
          {categoriesData.map((cat, index) => (
            <div key={index} className="d-flex align-items-center gap-3">
              {/* Gol Circle aur Icon */}
              <div className={styles.icon_circle}>
                <i className={`${cat.icon} fs-5`}></i>
              </div>
              {/* Text */}
              <div>
                <h6 className="mb-0 fw-bold text-dark" style={{ fontSize: '13px', letterSpacing: '0.5px' }}>
                  {cat.title}
                </h6>
                <small className="text-muted" style={{ fontSize: '11px' }}>
                  {cat.subtitle}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    
  );
};

export default Badges;





 