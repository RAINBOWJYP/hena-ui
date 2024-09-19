import { IProfileThumbProps } from "../type/user";

const ProfileThumb = ({ src, alt }: IProfileThumbProps) => {
  return (
    <img
      className="w-10 h-10 rounded-full border-solid border border-gray-600"
      src={src}
      alt={alt}
    />
  );
};

export default ProfileThumb;
