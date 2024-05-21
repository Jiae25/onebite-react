const Button = ({ text, color, children }) => {
  // 이벤트 객체가 매개변수로 제공된다.
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return <button
    onClick={onClickButton}
    // onMouseEnter={onClickButton}
    style={{ color: color }}>
    {text} - {color.toUpperCase()}
    {children}</button>;
};

Button.defaultProps = {
  color: "black",
}
export default Button;