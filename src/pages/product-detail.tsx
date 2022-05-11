import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

const ProductDetail = (): ReactElement => {
  const router = useRouter();

  const images: ReactImageGalleryItem[] = [
    {
      original: '/assets/images/image-product-1.jpg',
      thumbnail: '/assets/images/image-product-1-thumbnail.jpg',
      thumbnailClass: 'rounded-2xl border-sneaker-orange',
    },
    {
      original: '/assets/images/image-product-2.jpg',
      thumbnail: '/assets/images/image-product-2-thumbnail.jpg',
      thumbnailClass: 'rounded-2xl',
    },
    {
      original: '/assets/images/image-product-3.jpg',
      thumbnail: '/assets/images/image-product-3-thumbnail.jpg',
      thumbnailClass: 'rounded-2xl',
    },
    {
      original: '/assets/images/image-product-4.jpg',
      thumbnail: '/assets/images/image-product-4-thumbnail.jpg',
      thumbnailClass: 'rounded-2xl',
    },
  ];

  return (
    <Layout pathname={router.pathname}>
      <div className="mt-20">
        <div className="flex space-x-12 justify-between mx-12">
          <div className="w-1/2">
            <ImageGallery items={images} showNav={false} showPlayButton={false} showFullscreenButton={false} />
          </div>
          <div className="w-1/2">
            <h2>DESCRIPTION</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
