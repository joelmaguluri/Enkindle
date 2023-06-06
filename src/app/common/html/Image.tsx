import NextImage, { ImageProps } from "next/image";

export function Image(props: ImageProps): JSX.Element {
  return <NextImage unoptimized={true} {...props} />;
}

export default Image;
