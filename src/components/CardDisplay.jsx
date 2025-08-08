import React from "react";
import cardFront from "../assets/card-front.png";
import cardBack from "../assets/card-back.png";
import cardLogo from "../assets/card-logo.svg";

export const CardDisplay = ({
  cardHolder,
  cardNumber,
  expiryMonth,
  expiryYear,
  cvc,
}) => {
  return (
    <div className="relative w-full">
      {/* Mobile Layout */}
      <div className="lg:hidden relative w-full h-[330px] mt-4 px-4">
        {/* Back of Card */}
        <div className="absolute left-14 top-0 w-72 h-44 z-10">
          <img
            src={cardBack}
            alt="Card Back"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-[76px] right-6 text-white font-mono text-sm tracking-widest">
            {cvc || "000"}
          </div>
        </div>

        {/* Front of Card */}
        <div className="absolute left-5 top-25 w-72 h-44 z-20">
          <img
            src={cardFront}
            alt="Card Front"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <img
            src={cardLogo}
            alt="Card Logo"
            className="absolute top-4 left-4 w-12"
          />
          <div className="absolute top-[95px] left-4 text-white font-mono text-lg tracking-widest">
            {cardNumber || "0000 0000 0000 0000"}
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-sm uppercase">
            <span>{cardHolder || "Jane Appleseed"}</span>
            <span>
              {expiryMonth && expiryYear
                ? `${expiryMonth}/${expiryYear}`
                : "00/00"}
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative w-full h-[400px] pl-24 pt-10">
        {/* Front Card */}
        <div className="absolute top-0 left-15 w-80 h-48 z-20">
          <img
            src={cardFront}
            alt="Card Front"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <img
            src={cardLogo}
            alt="Card Logo"
            className="absolute top-4 left-4 w-12"
          />
          <div className="absolute top-[100px] left-6 text-white font-mono text-xl tracking-widest">
            {cardNumber || "0000 0000 0000 0000"}
          </div>
          <div className="absolute bottom-4 left-6 right-6 flex justify-between text-white text-sm uppercase">
            <span>{cardHolder || "Jane Appleseed"}</span>
            <span>
              {expiryMonth && expiryYear
                ? `${expiryMonth}/${expiryYear}`
                : "00/00"}
            </span>
          </div>
        </div>

        {/* Back Card */}
        <div className="absolute top-55 left-35 w-80 h-48 z-10">
          <img
            src={cardBack}
            alt="Card Back"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-[80px] right-6 text-white font-mono text-base tracking-widest">
            {cvc || "000"}
          </div>
        </div>
      </div>
    </div>
  );
};
