"use client";
import { useRef } from "react";
import RecipeCarousel from "../../../components/recipeCarousel/recipeCarousel";

const TestPage = () => {
  const recipeData = [
    {
      imgPath:
        "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg",
      title: "Recipe 1",
      description: "This is recipe 1.",
      wishListed: true,
      rating: 4.3,
      tags: ["Heart-healthy", "Weight loss"],
    },
    {
      imgPath:
        "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg",
      title: "Recipe 2",
      description: "This is recipe 2.",
      wishListed: false,
      rating: 4.0,
      tags: ["Heart-healthy"],
    },
    {
      imgPath:
        "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg",
      title: "Recipe 3",
      description: "This is recipe 3.",
      wishListed: true,
      rating: 3.6,
      tags: ["Gluten free"],
    },
    {
      imgPath:
        "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg",
      title: "Recipe 4",
      description: "This is recipe 4.",
      wishListed: false,
      rating: 3.9,
      tags: ["Heart-healthy", "Gluten free"],
    },
    {
      imgPath:
        "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg",
      title: "Recipe 5",
      description: "This is recipe 5.",
      wishListed: false,
      rating: 4.9,
      tags: ["Heart-healthy", "Gluten free"],
    },
  ];
  const recipeCarouselRef1 = useRef(null);
  const recipeCarouselRef2 = useRef(null);
  const carouselHandleNext = (carouselRef) => {
    carouselRef.current.handleNext();
  };
  const carouselHandlePrev = (carouselRef) => {
    carouselRef.current.handlePrev();
  };
  return (
    <div className="w-full mt-5">
      <RecipeCarousel recipeData={recipeData} ref={recipeCarouselRef1} />
    </div>
  );
};
export default TestPage;
