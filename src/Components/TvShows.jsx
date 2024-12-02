import React from 'react';
import Carousel from './CarouselCard';

export default function TvShows({ tvData }) {
    return <Carousel data={tvData} title="TV Shows" id="tvShowsCarousel" isMovie={false} />;
}
