const CardTitle = ({ title }: { title: string }) => {
  return <p style={{ fontSize: 14, fontWeight: "bold" }}>{title}</p>;
};
const CardSubHeader = ({ subheader }: { subheader: string }) => {
  return <p style={{ fontSize: 12 }}>{subheader}</p>;
};
export { CardTitle, CardSubHeader };
