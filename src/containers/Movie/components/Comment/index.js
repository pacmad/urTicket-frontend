import Icons from 'components/Icons'
import { CAST_PHOTO } from 'constants/image'
import React from 'react';
import './Comment.scss'

export default function Comment(props) {
    return (
        <div className="comment">
            <div className="comment__avatar">
                <img src={CAST_PHOTO[0]} alt="audience" />
            </div>
            <div className="comment__wrapper">
                <div className="comment__wrapper__author">
                    Chris Smith
                </div>
                <div className="comment__wrapper__content">
                    <p className="line-clamp-2">
                        In Tony's recording after the final battle he states that if
                        someone told him 10 years ago that we weren't alone in the
                        universe he would find it difficult to believe.In the movie
                        it is established that the battle of New York from The Avengers (2012).
                    </p>
                </div>
                <div className="comment__wrapper__react">
                    <div className="like inline-flex space-x-1 items-center mr-6">
                        <Icons className="h-7 w-7" name="Like" fill="#31d7a9" />
                        <span>(8)</span>
                    </div>
                    <div className="dislike inline-flex space-x-1 items-center mr-6">
                        <Icons className="h-6 w-6 mt-2" name="Dislike" fill="#f1481f" />
                        <span>(2)</span>
                    </div>
                    <div className="report flex items-center">
                        <p >Reply</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
