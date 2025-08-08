import React, { useState } from "react";
import { CardForm } from "../components/CardForm";
import { CardDisplay } from "../components/CardDisplay";
import bgMobile from "../assets/bg-mobile.png";
import bgDesktop from "../assets/bg-desktop.png";

export const Home = () => {
  const [cardData, setCardData] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div
          className="pt-8 pb-20 px-4 h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgMobile})` }}
        >
          <CardDisplay {...cardData} />
        </div>
        <div className="bg-white pt-18">
          <CardForm setCardData={setCardData} />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:min-h-screen relative">
        <div
          className="lg:w-5/12 flex items-center justify-start pl-8 pt-8 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgDesktop})` }}
        ></div>
        <div className="lg:w-10/12 bg-white flex items-center justify-center">
          <CardForm setCardData={setCardData} />
        </div>

        <div className="absolute md:left-48 top-1/2 transform -translate-y-1/2 z-10 drop-shadow-2xl">
          <CardDisplay {...cardData} />
        </div>
      </div>
    </div>
  );
};
