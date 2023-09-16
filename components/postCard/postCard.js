"use client";
import {
  CommentOutlined,
  LikeOutlined,
  MoreOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Comments from "../comments/comments";

const PostCard = ({ post }) => {
  const [commentsVisible, setCommentsVisible] = useState(false);

  const toggleComments = () => {
    setCommentsVisible((prev) => !prev);
  };

  return (
    <div className="__post_card bg-white shadow-lg rounded-lg my-5 w-full">
      <div className="__post_content">
        <Row className="__header flex flex-row justify-between">
          <Col span={20}>
            <Row span={24}>
              <img
                src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                height="50"
                width="100"
                className="flex justify-center items-center rounded-full p-5"
              />
              <div className="flex flex-col p-5">
                <span className="text-lg text-black">User</span>
                <span className="text-md text-slate-600">50 Mins Ago</span>
              </div>
            </Row>
          </Col>
          <Col span={4} className="flex p-5 justify-end">
            <Button icon={<MoreOutlined />} className="border-0 shadow-none" />
          </Col>
        </Row>
        <Row span={24}>
          <div className="flex flex-col p-5 w-full text-black">
            {post.content}
          </div>
          <div className="h-full w-full p-5 pt-0 rounded-lg">
            <img src={post.attachment} className="rounded-lg" />
          </div>
        </Row>
        <Row span={24} className="px-5 py-1">
          <div className="w-full p-2 flex justify-between border-y-[1px] border-gray text-black">
            <div>
              <Button icon={<LikeOutlined />} className="border-0" />{" "}
              <Divider type="vertical" orientationMargin={"0"} /> 5
            </div>
            <div>
              <Button
                onClick={toggleComments}
                icon={<CommentOutlined />}
                className="border-0"
              />
              <Divider type="vertical" orientationMargin={"0"} /> 5
            </div>
            <div>
              <Button icon={<ShareAltOutlined />} className="border-0" />
              <Divider type="vertical" orientationMargin={"0"} /> 5
            </div>
          </div>
        </Row>
      </div>
      <CSSTransition
        in={commentsVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div>
          <Comments className="text-black" comments={post.comments} />
        </div>
      </CSSTransition>
      <Row className="__header flex flex-row justify-between items-center">
        <Col span={4}>
          <Row span={24} className="flex justify-center items-center">
            <img
              src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
              height="30"
              width="60"
              className=" rounded-full p-2"
            />
          </Row>
        </Col>
        <Col span={20} className="flex p-5 ps-0 justify-end">
          <TextArea
            rows={2}
            placeholder="Write a comment..."
            className="bg-slate-100 border-0"
          />
        </Col>
      </Row>
    </div>
  );
};

export default PostCard;
