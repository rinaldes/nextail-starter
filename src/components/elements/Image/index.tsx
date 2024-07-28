import { Image as NextUIImage } from "@nextui-org/image";
import { default as NextImage } from "next/image";

import { ImageType } from "./type";

const Image = ({ priority, ...rest }: ImageType) =>
  priority ? <NextImage priority={true} {...rest} /> : <NextUIImage {...rest} />;

export default Image;
