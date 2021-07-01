import { DEFAULT_IMAGE_SOURCE } from "../../lib/utils/constant";
import handleBrokenImage from "../../lib/utils/handleBrokenImage";



const CustomImage = ({ src, alt, className }) => (
  <img
    data-sizes="auto"
    data-src={src}
    src={DEFAULT_IMAGE_SOURCE}
    alt={alt}
    className={className ? `${className} lazyload` : `lazyload`}
    onError={handleBrokenImage}
  />
);

export default CustomImage;
