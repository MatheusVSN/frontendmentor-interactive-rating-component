import { useState } from "react";
import Head from "next/head"

import Image from "next/image";

import Button from "../components/button.jsx";
import SubmitButton from "../components/submit-button.jsx";

import StarIcon from "../images/icon-star.svg";
import ThankYouIcon from "../images/illustration-thank-you.svg";

export default function Main() {
  const numbers = [1, 2, 3, 4, 5];
  const [currentRating, setCurrentRating] = useState(0);
  const [currentPageMode, setcurrentPageMode] = useState(0);

  function submitMouseButton1Click() {
    setcurrentPageMode(1);
  }

  function changeRating(argument) {
    setCurrentRating(argument);
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Interactive Rating Component</title>
      </Head>

      {/* Main Container */}
      <div
        className={`bg-dark-blue rounded-3xl p-8 ${
          currentPageMode === 0 || `hidden`
        }`}
      >
        {/* Star Icon */}
        <div className={`mb-8 bg-dark-blue-2 rounded-full p-4 inline-flex`}>
          <Image src={StarIcon} alt={"Star Icon"} />
        </div>

        {/* Main Title */}
        <h1 className={`text-white text-3xl font-semibold mb-4`}>
          How did we do?
        </h1>
        {/* Description */}
        <h2 className={`text-medium-grey max-w-sm mb-8`}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </h2>

        {/* Rating Buttons */}
        <div className={`flex justify-between mb-8`}>
          {numbers.map((index) => {
            return (
              <Button
                key={index}
                Rating={index}
                onClick={() => changeRating(index)}
                ActiveState={currentRating == index}
              />
            );
          })}
        </div>

        {/* Submit */}
        <SubmitButton onClick={submitMouseButton1Click} />
      </div>

      {/* Thank you page
      After the user give his feedback
      The container below will be visible
      */}
      <div
        className={`bg-dark-blue rounded-lg p-10 ${
          currentPageMode === 1 || `hidden`
        }`}
      >
        {/* Star Icon */}
        <div className="grid place-content-center mb-4">
          <Image
            className="mb-4"
            src={ThankYouIcon}
            Alt={"Thank you for your feedback"}
          />
        </div>

        {/* What rating the user gave */}
        <div className="flex justify-center">
          <h3 className="text-orange bg-dark-blue-2 rounded-3xl p-2 px-4 mb-7frontend text-center text-base mb-5">
            You selected {currentRating} out of 5
          </h3>
        </div>

        {/* :) */}
        <h2 className="text-white font-semibold text-center text-3xl mb-5">
          Thank You!
        </h2>

        {/* Description */}
        <h3 className="max-w-xs text-center text-medium-grey">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </h3>
      </div>
    </>
  );
}
