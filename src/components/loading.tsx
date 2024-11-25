import { Spin } from "antd";

function Loading() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Spin size="large" />
    </div>
  );
}

export default Loading;
