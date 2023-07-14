import { LoadingOutlined } from "@ant-design/icons";

const Loading = ({ height }: { height: string | number }) => {
  const divStyle: React.CSSProperties = {
    height: height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={divStyle}>
      <LoadingOutlined style={{ fontSize: 60 }} />
    </div>
  );
};

export default Loading;
