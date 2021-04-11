import FilterDate from 'components/FilterDate';
import FilterSort from 'components/FilterSort';
import Footer from 'components/Footer';
import Header from 'components/Header';
import MovieItem from 'components/MovieItem';
import Pagination from 'components/Pagination';


import React from 'react';
import FilterCinema from './components/FilterCinema';
import MovieCarousel from './components/MovieBannerCarousel';
import MovieSearch from './components/MovieSearch';
import Tabs from './components/Tabs';

export default function Movie() {
    return (
        <div className="w-full h-full">
            {/* <Header />
            <MovieCarousel />
            <MovieSearch />
            <Tabs />
            <FilterCinema />
            <FilterDate /> */}
            {/* <FilterSort /> */}
            {/* <Pagination />
            <Footer /> */}

            <MovieItem />
        </div>
    )
}