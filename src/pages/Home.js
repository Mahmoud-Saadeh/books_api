import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Banner from '../images/Bibliophile-amico.png';

import './Home.scss';
import { Link } from 'react-router-dom';

export const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-page">
      <div className="banner-area">
        <div>
          <img src={Banner} alt="banner" />
        </div>
        <div className="banner-content">
          <h3>Explore the best books</h3>
          <p>Explore any book and sort the results by their author or title</p>
          <Link to="/search">
            <button>Explore Now</button>
          </Link>
        </div>
      </div>
      <div className="slider-section">
        <Slider {...settings}>
          <div className="slider-item">
            <img
              src="http://books.google.com/books/content?id=eEgC3bS4dOwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt="sample"
            />
          </div>
          <div className="slider-item">
            <img
              src="http://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt="sample"
            />
          </div>
          <div className="slider-item">
            <img
              src="http://books.google.com/books/content?id=nVGKDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt="sample"
            />
          </div>
          <div className="slider-item">
            <img
              src="http://books.google.com/books/content?id=N3FRBAQgcxEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt="sample"
            />
          </div>
          <div className="slider-item">
            <img
              src="http://books.google.com/books/content?id=3Nt8DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt="sample"
            />
          </div>
          <div className="slider-item">
            <img
              src="http://books.google.com/books/content?id=SfeuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt="sample"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
