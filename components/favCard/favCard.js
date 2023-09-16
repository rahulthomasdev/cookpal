"use client";
import {
  EditOutlined,
  FieldTimeOutlined,
  HeartFilled,
  HeartOutlined,
  ShareAltOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Button, Card, Col, Modal, Rate, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import darkenColor from "../../utils/darkerColor";

const FavCard = ({
  imgPath,
  title,
  description,
  wishListed,
  rating,
  tags,
  bgColor,
}) => {
  var [wishListedFlag, setWishListedFlag] = useState(wishListed);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
      className="shadow-md"
    >
      <Card.Meta
        title={
          <div className="__recipecard_header flex flex-row justify-between">
            <p>{title}</p>
            <div style={{ display: "inline-flex" }} className="px-2">
              <StarFilled style={{ color: "orange" }} />
              <p style={{ paddingLeft: "10px" }}>{rating}</p>
            </div>
          </div>
        }
        description={
          <Row>
            <Col span={18}>{description}</Col>
            <Col span={6} className="inline-flex justify-end  text-sm ">
              <Button
                icon={<EditOutlined />}
                className="__add_review border-0 text-black m-1 shadow-none"
                onClick={showModal}
              />
              <Button
                icon={<ShareAltOutlined />}
                className="__add_review border-0 text-black m-1 shadow-none"
              />
            </Col>
          </Row>
        }
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
      <Modal
        title="Add Review"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="__add_review_modal"
      >
        <div className="flex flex-col">
          <span className="text-md font-semibold mt-1">Rating</span>
          <Rate allowHalf defaultValue={4} />
          <span className="text-md font-semibold mt-1">Comments</span>
          <TextArea rows={3} className="mt-2" />
        </div>
      </Modal>
    </Card>
  );
};

export default FavCard;
