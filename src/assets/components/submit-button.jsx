
import React from "react"
import { useNavigate } from 'react-router-dom';

import RatingButtons from "../components/rating-button"

function SubmitButton() {
    {/* react navigate function */}
    const navigate = useNavigate()

    {/* Function that triggers when the user clicked with the mouse button 1 */}
    function MouseButton1Click() {
        let AllButtons = RatingButtons.AllButtons
        let FoundActiveButton = false

        {/* 
        Does there a active rating?
        If no, then we will return and do nothing
        */}
        for (let IndexPosition in AllButtons) {
            let isActive = AllButtons[IndexPosition].state.active
            if (isActive === true) {
                FoundActiveButton = true
                break;
            }
        }

        if (!FoundActiveButton) return

        {/* Redirects to the thank-you page if the user selected a rating */}
        navigate("thank-you")
    }

    {/* Renders the submit button */}
    return (
        <button type="submit" className="confirm-button" onClick={MouseButton1Click}>
            SUBMIT
        </button>
    );
}

export default SubmitButton;