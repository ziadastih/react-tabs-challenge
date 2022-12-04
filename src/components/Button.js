const Button = (props) => {
  return (
    <button
      className={props.active ? "tab-btn active" : "tab-btn"}
      onClick={props.activate}
    >
      {props.value}
    </button>
  );
};

export default Button;
