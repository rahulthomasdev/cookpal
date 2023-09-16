"use client";
import { MoreOutlined } from "@ant-design/icons";
import { Button, Card, Image, Rate } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const ReviewCard = ({ dpUrl, recipeTitle, rating, comment, bgColor }) => {
  return (
    <Card style={{ backgroundColor: bgColor }} className="shadow-md border-0">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Image
            width={60}
            height={60}
            src={dpUrl}
            className="rounded-full object-cover p-2"
          />
          <div className="flex flex-col px-2  py-2">
            <div className="text-slate-700 text-md font-semibold">
              User Name
            </div>
            <div className="text-slate-400 text-md">Title</div>
          </div>
        </div>
        <Button
          className="border-0 m-2"
          icon={<MoreOutlined className=" shadow-none" />}
        />
      </div>
      <div>
        <div className="text-slate-700 font-semibold text-md p-2">
          {recipeTitle}
        </div>
        <div className="inline-flex">
          <Rate defaultValue={0} value={rating} style={{ color: "orange" }} />
          <div className="text-slate-600 font-semibold text-md p-2">
            {rating}
          </div>
        </div>
      </div>
      <Paragraph
        className="pe-3"
        ellipsis={{
          rows: 2,
          expandable: true,
          symbol: "Read More",
        }}
      >
        Perferendis animi dolorem itaque quod a. Ducimus quis molestiae earum
        praesentium praesentium possimus. A dicta repudiandae commodi tenetur
        inventore recusandae accusamus doloribus doloremque.Perferendis animi
        dolorem itaque quod a. Ducimus quis molestiae earum praesentium
        praesentium possimus.
      </Paragraph>
    </Card>
  );
};

export default ReviewCard;
