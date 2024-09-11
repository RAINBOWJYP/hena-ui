import { IconProps } from "../type/icon";
import { setStyle } from "../utils/styleFunc";

const Menu = (props: IconProps) => {
  const { width = "24px", height = "24px", className, fill, onClick } = props;
  const style = setStyle(width, height);

  return (
    <svg
      className={className}
      width={style.width}
      height={style.height}
      viewBox="0 0 24 24"
      fill={fill || "current"}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
        fill="current"
      />
    </svg>
  );
};

export default Menu;
