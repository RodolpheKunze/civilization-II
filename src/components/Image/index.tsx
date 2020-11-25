import React from 'react';
// import Image from 'next/image';

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
  // width,
  // height,
  // layout = 'responsive',
  // quality = '100',
}) => {
  return (
    <div className="image">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageWebp;
