"use client";
import { FilterFilled, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Layout } from "antd";

import CardGridWithPagination from "../../../components/recipeCardGrid/recipeCardGrid";

const { Header, Content, Footer, Sider } = Layout;
const ExplorePage = () => {
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
    {
      imgPath:
        "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg",
      title: "Recipe 6",
      description: "This is recipe 6.",
      wishListed: false,
      rating: 4.1,
      tags: ["Heart-healthy", "Gluten free"],
    },
    {
      imgPath:
        "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg",
      title: "Recipe 7",
      description: "This is recipe 7.",
      wishListed: false,
      rating: 4.4,
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
    {
      imgPath:
        "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg",
      title: "Recipe 5",
      description: "This is recipe 5.",
      wishListed: false,
      rating: 4.9,
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
    {
      imgPath:
        "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg",
      title: "Recipe 5",
      description: "This is recipe 5.",
      wishListed: false,
      rating: 4.9,
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
    {
      imgPath:
        "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg",
      title: "Recipe 5",
      description: "This is recipe 5.",
      wishListed: false,
      rating: 4.9,
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
    {
      imgPath:
        "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg",
      title: "Recipe 5",
      description: "This is recipe 5.",
      wishListed: false,
      rating: 4.9,
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

  return (
    <Layout>
      <Content className="bg-slate-100">
        <div className="w-full flex flex-row items-center justify-center">
          <Input
            size="large"
            placeholder="What do you want to cook today?"
            prefix={<SearchOutlined className="px-5" />}
            className="text-slate-600 text-xl my-5 mt-10 rounded-lg border-none shadow-lg"
            style={{
              width: "80%",
            }}
          />
          <Button
            icon={<FilterFilled className="text-lg hover:!text-slate-600" />}
            className="__filter_btn bg-white text-xl mx-5 mt-10 my-5 shadow-lg border-none !h-11 !w-11 rounded-lg"
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
            <h1 className="text-slate-600 text-4xl font-semibold">
              Explore Recipes
            </h1>
          </div>
          <div className="w-full mt-2">
            <span className="text-slate-400 text-xl font-semibold">
              Discover a World of Culinary Delights
            </span>
          </div>
          <div className="w-full mt-5 __explore_recipe">
            <CardGridWithPagination recipesData={recipeData} />
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
export default ExplorePage;
