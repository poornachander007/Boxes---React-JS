const Box = (props) => {
  const { name, className } = props;
  return <div className={className}>{name}</div>;
};

const element = (
  <div className="page_div">
    <h1 className="heading">Boxes</h1>
    <div className="boxes_div">
      <Box name="Small" className="small_box" />
      <Box name="Medium" className="medium_box" />
      <Box name="Large" className="large_box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
