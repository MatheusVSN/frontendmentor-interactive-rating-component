
import React from 'react';

import ThankYouIcon from "../icons/illustration-thank-you.svg"

import RatingButtons from "../components/rating-button"

export default function ThankYou() {
    {/* 
    Final Rating value default set to 0 
    We will also get all the buttons stored in the "AllButtons" array
    */}
    let FinalRating = null;
    let AllButtons = RatingButtons.AllButtons

    {/* We will trough the AllButtons array to find a element wich has the property "state" set to true */}
    for (let IndexPosition in AllButtons) {
        let isActive = AllButtons[IndexPosition].state.active
        if (isActive === true) {
            {/* 
            We have found a button wich is active 
            After we found, let's break the loop so it doesn't do unecessary searches
            */}
            FinalRating = AllButtons[IndexPosition].state.ratingValue
            break;
        }
    }

    {/* Renders the element using the rating you've gave */}
    return (
        <main id="main-2">
            <img className="thank-you-icon" src={ThankYouIcon} alt="Thank You"/>
            <p className="rating-given">You selected {FinalRating} out of 5</p>
            <h1>Thank you!</h1>
            <h2 className="thank-you-text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</h2>
        </main>
    )
}