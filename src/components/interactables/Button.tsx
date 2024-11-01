interface ButtonProps {
  onClick: () => void;
  height?: number;
  imagePath?: string;
  imageAltText?: string;
  imageStyles?: string;
  text?: string;
  textStyles?: string;
  buttonStyles?: string;
  border?: boolean;
}

const Button = ({
  onClick,
  height = 32,
  imagePath,
  imageAltText,
  imageStyles,
  text,
  textStyles,
  buttonStyles,
  border = true,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{ height: `${height}px` }}
      className={`bg-gray-100 hover:bg-gray-101 ${
        border && "border-[1px] border-gray-border"
      } flex flex-row items-center space-x-2 rounded-md px-3 py-1 ${buttonStyles}`}
    >
      {imagePath && imageAltText && (
        <img src={imagePath} alt={imageAltText} className={imageStyles} />
      )}
      {text && <p className={`text-sm text-secondary ${textStyles}`}>{text}</p>}
    </button>
  );
};

export default Button;
