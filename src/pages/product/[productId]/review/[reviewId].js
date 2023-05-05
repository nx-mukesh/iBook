import { useRouter } from 'next/router';


export default function Review (){
  const router = useRouter();
  const {reviewId, productId} = router.query;
  console.log(router.query)

  return (
    <h1>Review {reviewId} for product {productId}</h1>
  )
};