import React from 'react';

import SubmitButton from "../components/submit-button"
import RatingButton from '../components/rating-button';

import StarIcon from '../icons/icon-star.svg';

export default function MainPage() {
    return (
        <main>
            {/* Star icon image */}
            <div className="star-image-background">
                <img src={StarIcon} alt="Star" />
            </div>

            {/* Title & description */}
            <h1>How did we do?</h1>
            <h2>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</h2>
            
            {/* Generates 5 rating buttons */}
            <div className="rating-container">
                {[...Array(5)].map((_, index) => (
                    <RatingButton RatingValue={index + 1} />
                ))}
            </div>

            {/* Generates a submit button, that will redirect to /thank-you page after clicked */}
            <SubmitButton />
        </main>
    )
}