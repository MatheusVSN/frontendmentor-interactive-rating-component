import { useState } from "react";

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
      <div
        className={`bg-dark-blue rounded-lg p-5 ${
          currentPageMode === 0 || `hidden`
        }`}
      >
        <div className={`mb-8 bg-very-dark-blue rounded-full p-3 inline-flex`}>
          <Image src={StarIcon} alt={"Star Icon"} />
        </div>

        <h1 className={`text-white text-3xl font-semibold mb-4`}>
          How did we do?
        </h1>
        <h2 className={`text-medium-grey max-w-sm mb-8`}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </h2>

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

        <SubmitButton onClick={submitMouseButton1Click} />
      </div>

      <div
        className={`bg-dark-blue rounded-lg p-10 ${
          currentPageMode === 1 || `hidden`
        }`}
      >
        <div className="grid place-content-center">
          <Image
            className="mb-4"
            src={ThankYouIcon}
            Alt={"Thank you for your feedback"}
          />
        </div>

        <h3 className="text-orange bg-very-dark-blue rounded-3xl p-2 mb-10 text-center">
          You selected {currentRating} out of 5
        </h3>

        <h2 className="text-white font-semibold text-center text-3xl mb-5">
          Thank You!
        </h2>

        <h3 className="max-w-xs text-center text-medium-grey">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </h3>
      </div>
    </>
  );
}
