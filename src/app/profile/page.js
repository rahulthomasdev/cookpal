"use client";
import { EditOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Layout, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useRef, useState } from "react";
import PostCarousel from "../../../components/postCarousel/postCarousel";
import RecipeCarousel from "../../../components/recipeCarousel/recipeCarousel";
import ReviewCarousel from "../../../components/reviewCarousel/reviewCarousel";

const ProfilePage = () => {
  const [ellipsis, setEllipsis] = useState(true);
  const recipeCarouselRef1 = useRef(null);
  const recipeCarouselRef2 = useRef(null);
  const recipeCarouselRef3 = useRef(null);
  const carouselHandleNext = (carouselRef) => {
    carouselRef.current.handleNext();
  };
  const carouselHandlePrev = (carouselRef) => {
    carouselRef.current.handlePrev();
  };
  const postData = [
    {
      content:
        "Necessitatibus nostrum iusto. Expedita minima ea dignissimos nostrum voluptatem perferendis beatae. Expedita dolorum consectetur expedita dolores.",
      attachment:
        "https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg",
      comments: [
        {
          content:
            "Voluptas facilis laudantium eum sit sint. Maiores voluptate temporibus quasi. Aperiam debitis corrupti earum aut dolores nostrum earum.",
          since: 1694780974468,
          user: "User 1",
          likes: 20,
        },
        {
          content:
            "Voluptas facilis laudantium eum sit sint. Maiores voluptate temporibus quasi. Aperiam debitis corrupti earum aut dolores nostrum earum.",
          since: 1694780974468,
          user: "User 2",
          likes: 5,
        },
      ],
    },
    {
      content:
        "Necessitatibus nostrum iusto. Expedita minima ea dignissimos nostrum voluptatem perferendis beatae. Expedita dolorum consectetur expedita dolores.",
      attachment:
        "https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg",
      comments: [
        {
          content:
            "Voluptas facilis laudantium eum sit sint. Maiores voluptate temporibus quasi. Aperiam debitis corrupti earum aut dolores nostrum earum.",
          since: 1694780974468,
          user: "User 1",
          likes: 20,
        },
        {
          content:
            "Voluptas facilis laudantium eum sit sint. Maiores voluptate temporibus quasi. Aperiam debitis corrupti earum aut dolores nostrum earum.",
          since: 1694780974468,
          user: "User 2",
          likes: 5,
        },
      ],
    },
    {
      content:
        "Necessitatibus nostrum iusto. Expedita minima ea dignissimos nostrum voluptatem perferendis beatae. Expedita dolorum consectetur expedita dolores.",
      attachment:
        "https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg",
      comments: [
        {
          content:
            "Voluptas facilis laudantium eum sit sint. Maiores voluptate temporibus quasi. Aperiam debitis corrupti earum aut dolores nostrum earum.",
          since: 1694780974468,
          user: "User 1",
          likes: 20,
        },
        {
          content:
            "Voluptas facilis laudantium eum sit sint. Maiores voluptate temporibus quasi. Aperiam debitis corrupti earum aut dolores nostrum earum.",
          since: 1694780974468,
          user: "User 2",
          likes: 5,
        },
      ],
    },
  ];
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
  const reviewData = [
    {
      dpURL:
        "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png",
      recipeTitle: "Recipe 1",
      rating: 4.5,
      comment:
        "Perferendis animi dolorem itaque quod a. Ducimus quis molestiae earum praesentium praesentium possimus. A dicta repudiandae commodi tenetur inventore recusandae accusamus doloribus doloremque.",
    },
    {
      dpURL:
        "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png",
      recipeTitle: "Recipe 1",
      rating: 4.5,
      comment:
        "Perferendis animi dolorem itaque quod a. Ducimus quis molestiae earum praesentium praesentium possimus. A dicta repudiandae commodi tenetur inventore recusandae accusamus doloribus doloremque.",
    },
    {
      dpURL:
        "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png",
      recipeTitle: "Recipe 1",
      rating: 4.5,
      comment:
        "Perferendis animi dolorem itaque quod a. Ducimus quis molestiae earum praesentium praesentium possimus. A dicta repudiandae commodi tenetur inventore recusandae accusamus doloribus doloremque.",
    },
    {
      dpURL:
        "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png",
      recipeTitle: "Recipe 1",
      rating: 4.5,
      comment:
        "Perferendis animi dolorem itaque quod a. Ducimus quis molestiae earum praesentium praesentium possimus. A dicta repudiandae commodi tenetur inventore recusandae accusamus doloribus doloremque.",
    },
    {
      dpURL:
        "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png",
      recipeTitle: "Recipe 1",
      rating: 4.5,
      comment:
        "Perferendis animi dolorem itaque quod a. Ducimus quis molestiae earum praesentium praesentium possimus. A dicta repudiandae commodi tenetur inventore recusandae accusamus doloribus doloremque.",
    },
  ];
  return (
    <Layout>
      <Row className="relative !h-1/6">
        <Col span={24} className="h-full">
          <img
            src="https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg"
            className="__profile_cover h-full w-full object-cover"
          />
        </Col>
      </Row>
      <Row className="flex justify-center">
        <Col span={24}>
          {" "}
          <div className="h-16 w-16 md:h-24 md:w-24 rounded-full absolute -bottom-1/4 left-2 md:left-8 bg-white">
            <img
              src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
              className="rounded-full h-16 w-16 md:h-24 md:w-24 object-cover p-0.5"
            />
          </div>
          <div className="flex flex-row justify-between my-2">
            <div className="inline-flex ms-20 md:ms-40">
              <h1 className="text-xl md:text-2xl text-slate-700 font-semibold my-2">
                User Name
              </h1>
              <Button icon={<EditOutlined />} className="mx-4 my-2" />
            </div>
            <Row className=" items-center flex justify-end">
              <div className="text-slate-600 font-bold text-sm md:text-md px-2">
                <span className="font-extrabold">1046</span> Followers
              </div>
              <Button className="me-4 my-1 text-slate-600 font-semibold text-sm md:text-md bg-pink-600 text-white border-0 hover:!text-pink-100">
                Follow
              </Button>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="ms-20 md:ms-40">
            <div className="flex flex-row justify-between">
              <h2 className="text-slate-600 font-semibold text-sm md:text-md">
                Title
              </h2>
            </div>
            <h3 className="text-slate-600 font-bold text-sm md:text-md pt-3">
              About Me
            </h3>
            <Paragraph
              className="pe-3"
              ellipsis={
                ellipsis
                  ? {
                      rows: 2,
                      expandable: true,
                      symbol: "See more",
                    }
                  : false
              }
            >
              Perferendis animi dolorem itaque quod a. Ducimus quis molestiae
              earum praesentium praesentium possimus. A dicta repudiandae
              commodi tenetur inventore recusandae accusamus doloribus
              doloremque.Perferendis animi dolorem itaque quod a. Ducimus quis
              molestiae earum praesentium praesentium possimus. A dicta
              repudiandae commodi tenetur inventore recusandae accusamus
              doloribus doloremque.Perferendis animi dolorem itaque quod a.
              Ducimus quis molestiae earum praesentium praesentium possimus. A
              dicta repudiandae commodi tenetur inventore recusandae accusamus
              doloribus doloremque.
            </Paragraph>
            <div className="pe-5">
              <Divider />
            </div>
          </div>
        </Col>
      </Row>

      <div
        style={{
          width: "100%",
        }}
        className="bg-slate-100 px-5"
      >
        <div className="w-full flex justify-between items-center mt-8">
          <h1 className="text-slate-600 text-lg md:text-2xl font-semibold">
            My Recipes
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
        <div className="w-full mt-5">
          <RecipeCarousel recipeData={recipeData} ref={recipeCarouselRef1} />
        </div>
      </div>
      <div
        style={{
          width: "100%",
        }}
        className="bg-slate-100 px-5"
      >
        <div className="w-full flex justify-between items-center mt-8">
          <h1 className="text-slate-600 text-lg md:text-2xl font-semibold">
            Reviews & Comments
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
        <div className="w-full mt-5">
          <ReviewCarousel reviewData={reviewData} ref={recipeCarouselRef2} />
        </div>
      </div>

      <div
        style={{
          width: "100%",
        }}
        className="bg-slate-100 px-5"
      >
        <div className="w-full flex justify-between items-center mt-8">
          <h1 className="text-slate-600 text-lg md:text-2xl font-semibold">
            My Posts
          </h1>
          <div>
            <Button
              icon={<LeftOutlined className="!text-xs !font-extrabold" />}
              className="bg-white border-none mr-2 my-2"
              onClick={() => carouselHandlePrev(recipeCarouselRef3)}
            />
            <Button
              icon={<RightOutlined className="!text-xs !font-extrabold" />}
              className="bg-white border-none"
              onClick={() => carouselHandleNext(recipeCarouselRef3)}
            />
          </div>
        </div>
        <div className="w-full mt-5">
          <PostCarousel postData={postData} ref={recipeCarouselRef3} />
        </div>
      </div>
    </Layout>
  );
};
export default ProfilePage;
