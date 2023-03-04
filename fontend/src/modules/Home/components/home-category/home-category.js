import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeCategory as category } from '~/assets/assets';
import style from './home-category.module.scss';
import productService from '~/shared/services/product.service';

function HomeCategory() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    productService.getAllCategory().then((res) => {
      setCategories(res.data.categories);
    });
  }, []);

  const onViewCategory = (categoryId) => {
    navigate(`/products/category/${categoryId}`);
  };
  return (
    <div>
      <h2 className="section-title text-3xl text-center">Shop By Category</h2>
      <div className="row">
        {categories &&
          categories.length > 0 &&
          categories.map((item, idx) => {
            return (
              <div className="col l-4 m-4 c-4 " key={idx}>
                <article
                  className={`${style.item}`}
                  onClick={() => onViewCategory(item.ID_Category)}
                >
                  <div className={` ${style.itemImage}`}>
                    <img src={category[idx].image} alt="" />
                  </div>
                  <div className={` ${style.itemBody}`}>
                    <h6 className={` ${style.itemName}`}>{item.name}</h6>
                  </div>
                </article>
              </div>
            );
          })}
      </div>
      <div className="py-5 flex justify-center align-center">
        <button className={`${style.button}`} onClick={() => onViewCategory('all')}>
          Xem tất cả
        </button>
      </div>
    </div>
  );
}

export default HomeCategory;
