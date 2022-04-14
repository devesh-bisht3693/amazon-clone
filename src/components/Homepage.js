import React from 'react'
import "./Homepage.css"
import Product from './Product'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function Homepage() {
  return (
    <div className='home'>
      <div className='home__container'>
       <Carousel className='home__carousel' infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showIndicators={false} showStatus={false}>
       <div>
       <img className='home__img' src='https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg' alt='banner'/>
       </div>
       <div>
       <img className='home__img' src='https://m.media-amazon.com/images/I/81mlHpf2x3L._SX3000_.jpg' alt='banner'/>
       </div>
       <div>
       <img className='home__img' src='https://m.media-amazon.com/images/I/61Kuw4IZyHL._SX3000_.jpg' alt='banner'/>
       </div>
       <div>
       <img className='home__img' src='https://m.media-amazon.com/images/I/61m7gMzU7mL._SX3000_.jpg' alt='banner'/>
       </div>
       <div>
       <img className='home__img' src='https://m.media-amazon.com/images/I/61-e1sYEjoL._SX3000_.jpg' alt='banner'/>
       </div>
       <div>
       <img className='home__img' src='https://m.media-amazon.com/images/I/71xanPwQm2L._SX3000_.jpg' alt='banner'/>
       </div>
       <div>
       <img className='home__img' src='https://m.media-amazon.com/images/I/711ffQz-VcL._SX3000_.jpg' alt='banner'/>
       </div>
       <div>
       <img className='home__img' src='https://m.media-amazon.com/images/I/617CoD4euRL._SX3000_.jpg' alt='banner'/>
       </div>
       <div>
       <img className='home__img' src='https://m.media-amazon.com/images/I/71MwDPWV9XL._SX3000_.jpg' alt='banner'/>
       </div>
       </Carousel>
      <div className='home__row'>
      <Product
       title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
       price={29.99}
      image="https://images-na.ssl-images-amazon.com/images/I/51aEhyjQGrL._SX316_BO1,204,203,200_.jpg"
      rating={5}
      />
      <Product
       title="Kenwood Kitchen Machine kMix KMX750WH - 1000W|5L mixing bowl | K-beater, Whipping Tool & Dough Kneading Tool | 1 Year Warranty | White"
       price={583.99}
      image="https://m.media-amazon.com/images/I/51yd+TT6YuL._AC_UY327_FMwebp_QL65_.jpg"
      rating={4}
      />
      
      </div>
      <div className='home__row'>
      <Product
       title="Samsung 59.8 cm (23.5 inch) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)"
       price={162.79}
      image="https://m.media-amazon.com/images/I/71nplbAMwzL._SX679_.jpg"
      rating={4}
      />
      <Product
       title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
       price={45.99}
      image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX679_.jpg"
      rating={3}
      />
      <Product
       title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB) - Space Grey (5th Generation)"
       price={1311.49}
      image="https://m.media-amazon.com/images/I/81+N4PFF7jS._SX342_.jpg"
      rating={5}
      />
      </div>
      <div className='home__row'>
      <Product
       title="https://m.media-amazon.com/images/I/81+N4PFF7jS._SX342_.jpg"
       price={781.67}
      image="https://m.media-amazon.com/images/I/71w4Asb1N0S._AC_UY327_FMwebp_QL65_.jpg"
      rating={4}
      />
      </div>
      </div>
    </div>
  )
}

export default Homepage
//https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg