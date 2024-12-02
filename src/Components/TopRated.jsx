import React from 'react';
import Carousel from './CarouselCard';

export default function TopRated({ data }) {
    return <Carousel data={data} title="Top Rated" id="topRatedCarousel" isMovie={false} />;
}
