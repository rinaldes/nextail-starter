import { ImageProps } from "@nextui-org/image";

export type ImageType = ImageProps & {
  alt: string;
  priority: boolean;
  src: string;
  height: number;
  width: number;
};
