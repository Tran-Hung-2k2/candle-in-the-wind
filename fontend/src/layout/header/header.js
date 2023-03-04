import React, { useState, useEffect } from 'react';
import style from './header.module.scss';
import Navbar from './components/navbar/navbar';
import Ads from './components/ads/ads';
import SearchBox from './components/searchBox/searchBox';
import Cart from './components/cart/cart';
import Category from './components/category/category';
import { Link } from 'react-router-dom';

function Header() {
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) setFixed(true);
      else setFixed(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <div className={`${fixed ? `${style.fixed}` : `${style.hide}`}`}>
        <Navbar />
      </div>
      <Navbar />
      <section className="bg-white">
        <div className="grid wide">
          <Link to="/home" className={`${style.logo}`}>
            <h3 className="text-center font-semibold">Candle In The Wind</h3>
          </Link>
          <div className="row">
            <div className="col l-o-2 l-8  m-10 c-10">
              <SearchBox />
            </div>
            <div className="col l-2 m-2 c-2">
              <Cart />
            </div>
          </div>
          <div className="row">
            <div className="col l-o-2 l-10 m-12 c-12 ">
              <Category />
            </div>
          </div>
        </div>
        <Ads />
      </section>
    </header>
  );
}

export default Header;
