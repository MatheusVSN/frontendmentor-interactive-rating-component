import React from "react"
import { Routes, Route } from 'react-router-dom';

import MainPage from "./assets/pages/main"
import ThankYou from "./assets/pages/thank-you"

const PathString = "/frontendmentor-interactive-rating-component"

function RatingComponentPreview() {
    return (
        <React.StrictMode>
            <Routes>
                <Route path={`${PathString}`} element={<MainPage />} />
                <Route path={`${PathString}/thank-you`} element={<ThankYou />} />
            </Routes>
        </React.StrictMode>
    )
}

export default RatingComponentPreview
