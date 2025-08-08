import React from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { CardDisplay } from "../components/CardDisplay";
import { Button } from "../components/ui/button";
import bgMobile from "../assets/bg-mobile.png";
import bgDesktop from "../assets/bg-desktop.png";

export const CompletedPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div
          className="pt-8 pb-20 px-4 h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgMobile})` }}
        >
          <CardDisplay />
        </div>
        <div className="bg-white pt-18 h-full pb-10">
          <div className="w-full max-w-md mx-auto p-6 lg:p-8 flex flex-col items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-purple-600 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                THANK YOU!
              </h1>
              <p className="text-gray-500">We've added your card details</p>
            </div>
            <Button
              onClick={handleContinue}
              className="w-full bg-purple-950 hover:bg-purple-900 text-white py-4 px-4 rounded-lg mt-8"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:min-h-screen relative">
        <div
          className="lg:w-5/12 flex items-center justify-start pl-8 pt-8 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgDesktop})` }}
        ></div>
        <div className="lg:w-10/12 bg-white flex items-center justify-center">
          <div className="w-full max-w-md mx-auto p-6 lg:p-8 flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-800 to-purple-600 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900 mb-3">
                THANK YOU!
              </h1>
              <p className="text-gray-500 text-lg">
                We've added your card details
              </p>
            </div>
            <Button
              onClick={handleContinue}
              className="w-full bg-indigo-950 hover:bg-indigo-900 text-white py-4 px-6 rounded-lg mt-12"
            >
              Continue
            </Button>
          </div>
        </div>

        <div className="absolute left-48 top-1/2 transform -translate-y-1/2 z-10 drop-shadow-2xl">
          <CardDisplay />
        </div>
      </div>
    </div>
  );
};
