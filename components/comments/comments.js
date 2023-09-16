import ReactTimeago from "react-timeago";

const { Row, Col } = require("antd");

const Comments = ({ comments }) => {
  return (
    <div className="text-black">
      {comments.map((comment, index) => {
        return (
          <Row className="w-full" key={index}>
            <Col span={4}>
              <Row span={24}>
                <img
                  src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                  height="50"
                  width="100"
                  className="flex justify-center items-center rounded-full p-5"
                />
              </Row>
            </Col>
            <Col span={20}>
              <div className="flex flex-col p-5 ps-2">
                <span className="text-lg text-black">{comment.user}</span>
                <span className="text-md text-slate-600">
                  <ReactTimeago date={comment.since} />
                </span>
              </div>
              <div className="ps-2 text-black">{comment.content}</div>
              <Row>
                <Col span={24} className="inline-flex">
                  <div className="text-green-700 p-5 cursor-pointer">
                    Like({comment.likes})
                  </div>
                  <div className="text-green-700 p-5 cursor-pointer">Reply</div>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Comments;
