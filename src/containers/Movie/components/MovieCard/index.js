import React from 'react';
import './MovieCard.scss';
import { MOVIE_IMG, ICONS } from 'constants/image';

export default function MovieCard(props) {
    return (
        <div className="movie__card">
            <div className="movie__card__wrapper">
                <div className="movie__card__img">
                    <a href="/details" className="block">
                        <img className="w-full" src={MOVIE_IMG[Math.floor(Math.random() * 11)]} alt="movie" />
                    </a>
                </div>
                <div className="movie__card__content">
                    <h5 className="movie__card__title">
                        <a href="#0">alone</a>
                    </h5>
                    <ul className="movie__card__rating">
                        <li className="card__rating_item">
                            <div className="flex items-center ">
                                <img className="max-w-full" src={ICONS.TOMATO} alt="movie" />
                            </div>
                            <span className="font-semibold text-lg ml-2">88%</span>
                        </li>
                        <li className="card__rating_item">
                            <div className="flex items-center ">
                                <img className="max-w-full" src={ICONS.CAKE} alt="movie" />
                            </div>
                            <span className="font-semibold text-lg ml-2">88%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
