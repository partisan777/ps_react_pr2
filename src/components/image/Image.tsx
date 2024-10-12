import { ImgProps } from "./interfaces";

export const Image = ({image, alt, styles}: ImgProps) => {

  return (
    <img src={image} className={styles} alt={alt} />
  );
};
