"use client";
import {
  LeftOutlined,
  MoreOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Layout } from "antd";

import { useRef } from "react";
import RecipeCarousel from "../../components/recipeCarousel/recipeCarousel";
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
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
    <Layout>
      <Content className="bg-slate-100">
        <div className="w-full flex flex-row items-center justify-center">
          <Input
            size="large"
            placeholder="What do you want to cook today?"
            prefix={<SearchOutlined className="px-5" />}
            className="text-slate-600 text-sm md:text-xl my-5 ms-3 mt-10 rounded-lg border-none shadow-lg"
            style={{
              width: "80%",
            }}
          />
          <Button
            icon={<MoreOutlined className="text-lg" />}
            className="bg-white text-sm md:text-xl mx-5 mt-10 my-5 shadow-lg border-none !h-9 md:!h-11 !w-11 rounded-lg py-0"
          />
        </div>
        <div
          style={{
            padding: 24,
            minHeight: "80vh",
          }}
          className="bg-slate-100"
        >
          <div className="w-full flex justify-between items-center">
            <h1 className="text-slate-600 text-2xl md:text-4xl font-semibold">
              Recommended Recipes
            </h1>
            <div>
              <Button
                icon={<LeftOutlined className="!text-xs !font-extrabold" />}
                className="bg-white border-none mr-2 my-2"
                onClick={() => carouselHandlePrev(recipeCarouselRef1)}
              />
              <Button
                icon={<RightOutlined className="!text-xs !font-extrabold" />}
                className="bg-white border-none"
                onClick={() => carouselHandleNext(recipeCarouselRef1)}
              />
            </div>
          </div>
          <div className="w-full mt-2">
            <span className="text-slate-400 text-lg md:text-xl font-semibold">
              Based on your preferences
            </span>
          </div>
          <div className="w-full mt-5">
            <RecipeCarousel recipeData={recipeData} ref={recipeCarouselRef1} />
          </div>
          <div className="w-full flex justify-between items-center mt-8">
            <h1 className="text-slate-600 text-2xl md:text-4xl font-semibold">
              Trending Recipes
            </h1>
            <div>
              <Button
                icon={<LeftOutlined className="!text-xs !font-extrabold" />}
                className="bg-white border-none mr-2 my-2"
                onClick={() => carouselHandlePrev(recipeCarouselRef2)}
              />
              <Button
                icon={<RightOutlined className="!text-xs !font-extrabold" />}
                className="bg-white border-none"
                onClick={() => carouselHandleNext(recipeCarouselRef2)}
              />
            </div>
          </div>
          <div className="w-full mt-2">
            <span className="text-slate-400 text-lg md:text-xl font-semibold">
              Cooked by people with similar preferences
            </span>
          </div>
          <div className="w-full mt-5">
            <RecipeCarousel recipeData={recipeData} ref={recipeCarouselRef2} />
          </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Cookpal ©2023 Created by Sprout
      </Footer>
    </Layout>
  );
};
export default App;
