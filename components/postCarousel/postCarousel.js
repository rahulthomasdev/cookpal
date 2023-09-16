"use client";
import { Carousel } from "antd";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import PostCard from "../postCard/postCard";

export function randomLightColor() {
  const min = 200;
  const max = 255;
  const r = Math.floor(Math.random() * (max - min + 1) + min);
  const g = Math.floor(Math.random() * (max - min + 1) + min);
  const b = Math.floor(Math.random() * (max - min + 1) + min);

  return `rgb(${r}, ${g}, ${b})`;
}

const PostCarousel = forwardRef(({ postData }, ref) => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 800 && postData.length >= 1) {
        setSlidesToShow(1);
      } else if (screenWidth <= 1200 && postData.length >= 2) {
        setSlidesToShow(2);
      } else if (screenWidth <= 1400 && postData.length >= 3) {
        setSlidesToShow(3);
      } else if (screenWidth > 1400 && postData.length >= 4) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(postData.length);
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
      {postData.map((post, index) => (
        <div key={index}>
          <PostCard post={post} />
        </div>
      ))}
    </Carousel>
  );
});

export default PostCarousel;
