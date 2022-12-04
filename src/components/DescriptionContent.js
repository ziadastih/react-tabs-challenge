const DescriptionContent = (props) => {
  let list;
  const listArr = props.tab.list;
  listArr
    ? (list = listArr.map((item) => {
        return <li>{item}</li>;
      }))
    : (list = "");

  return (
    <div className={props.tab.active ? "content active" : "content"}>
      <h4>{props.tab.title}</h4>
      <p>{props.tab.desc}</p>
      <ul>{list}</ul>
    </div>
  );
};

export default DescriptionContent;
