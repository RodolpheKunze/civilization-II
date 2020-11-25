import React from 'react';
import Image from 'next/image';

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: 'responsive' | 'fixed' | 'intrinsic';
  quality?: string;
};
const ImageWebp: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  layout = 'responsive',
  quality = '100',
}) => {
  return (
    <div className="image">
      <Image src={src} alt={alt} width={width} height={height} layout={layout} quality={quality} />
    </div>
  );
};

export default ImageWebp;
