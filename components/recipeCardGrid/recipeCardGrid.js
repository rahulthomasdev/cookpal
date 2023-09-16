"use client";
import { Col, Pagination, Row } from "antd";
import { useEffect, useState } from "react";
import RecipeCard from "../recipeCard/recipeCard";
import { randomLightColor } from "../recipeCarousel/recipeCarousel";

const CardGridWithPagination = ({ recipesData }) => {
  const pageSize = 8;
  const [colSize, setColSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = recipesData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setColSize(24);
      } else if (screenWidth <= 1200) {
        setColSize(12);
      } else if (screenWidth > 1200) {
        setColSize(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {currentData.map((recipe, index) => (
          <Col span={colSize} key={index}>
            <RecipeCard
              imgPath={recipe.imgPath}
              title={recipe.title}
              description={recipe.description}
              wishListed={recipe.wishListed}
              rating={recipe.rating}
              tags={recipe.tags}
              bgColor={randomLightColor()}
            />
          </Col>
        ))}
      </Row>
      <div
        className="mt-5"
        style={{ display: "flex", justifyContent: "end", width: "100%" }}
      >
        <Pagination
          current={currentPage}
          total={recipesData.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default CardGridWithPagination;
