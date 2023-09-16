import {
  FileImageOutlined,
  TagOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Content, Footer } from "antd/es/layout/layout";
import PostCard from "../../../components/postCard/postCard";

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

const CommunityPage = () => {
  return (
    <Layout>
      <Content className="bg-slate-100">
        <div className="w-full flex flex-col justify-center items-center">
          <div
            className="bg-white shadow-lg mx-10 mt-5 rounded-lg w-11/12 md:w-2/3 "
            style={{ minHeight: "20vh" }}
          >
            <h1 className="p-8 text-slate-600 font-bold text-lg">
              Create New Post
            </h1>
            <div className="p-8 pt-0">
              <TextArea rows={5} placeholder="Write something..." />
            </div>
            <div className="p-8 pt-0 flex justify-between">
              <div className="cursor-pointer">
                <FileImageOutlined className="text-lg md:text-2xl px-1 text-green-500" />{" "}
                <span className="text-slate-500 font-semibold text-md md:text-lg">
                  Photo
                </span>
              </div>
              <div className="cursor-pointer">
                <VideoCameraOutlined className="text-lg md:text-2xl px-1 text-red-500" />
                <span className="text-slate-500 font-semibold text-md md:text-lg">
                  Video
                </span>
              </div>
              <div className="cursor-pointer">
                <TagOutlined className="text-lg md:text-2xl px-1 text-blue-500" />
                <span className="text-slate-500 font-semibold text-md md:text-lg">
                  Tag
                </span>
              </div>
              <div>
                <Button className="bg-green-600 px-4 ms-2 md:px-8 text-white hover:!bg-green-800 hover:!text-white hover:!border-white">
                  Post
                </Button>
              </div>
            </div>
          </div>

          <div className="w-11/12 md:w-2/3">
            {postData.map((post) => {
              return <PostCard post={post} />;
            })}
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
export default CommunityPage;
