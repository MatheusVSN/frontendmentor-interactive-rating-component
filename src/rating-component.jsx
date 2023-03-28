import React from "react"
import {Routes, Route} from 'react-router-dom';

import MainPage from "./assets/pages/main"
import ThankYou from "./assets/pages/thank-you"

function RatingComponentPreview() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/thank-you" element={<ThankYou/>}/>
        </Routes>
    )
}

export default RatingComponentPreview
