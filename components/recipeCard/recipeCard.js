"use client";
import {
  FieldTimeOutlined,
  HeartFilled,
  HeartOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Button, Card } from "antd";
import { useState } from "react";
import darkenColor from "../../utils/darkerColor";

const RecipeCard = ({
  imgPath,
  title,
  description,
  wishListed,
  rating,
  tags,
  bgColor,
}) => {
  var [wishListedFlag, setWishListedFlag] = useState(wishListed);

  return (
    <Card
      cover={
        <>
          <img src={imgPath} alt={title} />{" "}
          <div className="__time_duration_label rounded-full bg-gray flex items-center">
            <FieldTimeOutlined className="text-lg" />
            <span style={{ fontWeight: "bolder", paddingLeft: "10px" }}>
              55 Min
            </span>
          </div>
        </>
      }
      style={{ backgroundColor: bgColor }}
      className="shadow-md border-0"
    >
      <Card.Meta
        title={
          <div className="__recipecard_header flex flex-row justify-between">
            <p>{title}</p>
            <div style={{ display: "inline-flex" }}>
              <StarFilled style={{ color: "orange" }} />
              <p style={{ paddingLeft: "10px" }}>{rating}</p>
            </div>
          </div>
        }
        description={description}
      />
      {tags?.map((tag) => {
        return (
          <div
            className="__recipeTag"
            style={{
              marginTop: "8px",
              marginRight: "8px",
              padding: "5px",
              paddingLeft: "10px",
              paddingRight: "10px",
              background: darkenColor(bgColor, 30),
              borderRadius: "10px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bolder",
              fontSize: "small",
              color: "#475569",
            }}
          >
            {tag}
          </div>
        );
      })}

      <div className="__fav_btn rounded-full flex items-center">
        <Button
          icon={
            !wishListedFlag ? (
              <HeartOutlined className="__heart_outlined" />
            ) : (
              <HeartFilled className="__heart_filled" />
            )
          }
          onClick={() => setWishListedFlag(!wishListedFlag)}
        />
      </div>
    </Card>
  );
};

export default RecipeCard;
