const Button = ({
  text,
  bgColor,
  textColor,
  borderColor,
  hoverColor,
  onClick,
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} ${borderColor} ${hoverColor} border-2 px-6 py-1 rounded-lg font-bold text-sm transition-all`}
    >
      {text}
    </button>
  );
};

export default Button;
