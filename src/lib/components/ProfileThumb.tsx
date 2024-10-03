import { IProfileThumbProps } from "../type/user";

const ProfileThumb = ({ src, alt, onClick }: IProfileThumbProps) => {
  return (
    <img
      className="w-10 h-10 rounded-full border-solid border border-gray-600 cursor-pointer"
      src={src}
      alt={alt}
      onClick={onClick}
    />
  );
};

export default ProfileThumb;
