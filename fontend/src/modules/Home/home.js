import React from 'react';
import Hero from './components/hero/hero';
import { HeroImage, HeroSlide } from '~/assets/assets';
import Featured from './components/featured/featured';
import HomeCateGory from './components/home-category/home-category';
function Home() {
  return (
    <>
      <Hero slides={HeroSlide} images={HeroImage} />
      <div className="py-10"></div>
      <Featured />
      <div className="py-10"></div>
      <HomeCateGory />
      <div className="py-2"></div>
    </>
  );
}

export default Home;
