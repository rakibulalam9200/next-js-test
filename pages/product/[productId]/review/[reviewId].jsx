import { useRouter } from 'next/router';
import React from 'react';

const Review = () => {
    const router =  useRouter();
   const {productId,reviewId} = router.query;
    return (
        <div>
            <h2>This is Review ID: {reviewId} for Product ID: {productId} </h2>
        </div>
    );
};

export default Review;