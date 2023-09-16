"use client";
import { Carousel } from "antd";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReviewCard from "../reviewCard/reviewCard";

export function randomLightColor() {
  const min = 200;
  const max = 255;
  const r = Math.floor(Math.random() * (max - min + 1) + min);
  const g = Math.floor(Math.random() * (max - min + 1) + min);
  const b = Math.floor(Math.random() * (max - min + 1) + min);

  return `rgb(${r}, ${g}, ${b})`;
}

const ReviewCarousel = forwardRef(({ reviewData }, ref) => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 664) {
        setSlidesToShow(1);
      } else if (screenWidth <= 900) {
        setSlidesToShow(2);
      } else if (screenWidth <= 1400) {
        setSlidesToShow(3);
      } else if (screenWidth > 1400 && reviewData.length >= 4) {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const carouselRef = useRef(null);
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };
  useImperativeHandle(ref, () => ({
    handleNext: () => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    },
    handlePrev: () => {
      if (carouselRef.current) {
        carouselRef.current.prev();
      }
    },
  }));
  return (
    <Carousel
      slidesToShow={slidesToShow}
      slidesToScroll={1}
      className="__recipe_carousel"
      dots={false}
      ref={carouselRef}
      adaptiveHeight={false}
    >
      {reviewData.map((review, index) => (
        <div key={index}>
          <ReviewCard
            dpUrl={review.dpURL}
            recipeTitle={review.recipeTitle}
            rating={review.rating}
            comment={review.comment}
            bgColor={randomLightColor()}
          />
        </div>
      ))}
    </Carousel>
  );
});

export default ReviewCarousel;
