import React from 'react';
import Carousel from './CarouselCard';

export default function Movies({ data }) {
    return <Carousel data={data} title="Movies" id="movieCarousel" isMovie={true} />;
}
