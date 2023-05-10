import React from 'react';
import { useRouter } from 'next/router';
import ProductFrame from '@/components/productFrame';
import UserSignIn from '@/components/userSignIn';
import { ProductDetails, CreateReview, Review } from '@/components';

export default function ProductId() {
  const router = useRouter();
  const productId = router.query.productId;

  const product = {
    name: 'Macbeth',
    writer: 'William Shakespeare',
    edition: 1945,
    description: 'this is world wild program',
    image: 'https://i.pinimg.com/736x/01/61/28/016128391cd5de7d8b886cb3a8322df3.jpg  ',
    price: 250,
    variants: [
      {
        name: 'Macbeth',
        edition: 2022,
        publisher: 'Art Publication',
      },
      {
        name: 'Macbeth',
        edition: 1988,
        publisher: 'Australia Publication',
      },
    ],
  };

  return (
    <div>
      {/* <h2>Hello product id {productId}</h2> */}
      <ProductDetails product={product} />
      <Review />
      <CreateReview />
    </div>
  );
}
