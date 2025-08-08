import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const CardForm = ({ setCardData }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;
    if (name === "cardNumber") {
      updatedValue = value
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }
    if (name === "cvc") {
      updatedValue = value.replace(/\D/g, "").slice(0, 3);
    }
    if (["expiryMonth", "expiryYear"].includes(name)) {
      updatedValue = value.replace(/\D/g, "").slice(0, 2);
    }

    const newForm = { ...form, [name]: updatedValue };
    setForm(newForm);
    setCardData(newForm);
  };

  const validate = () => {
    const newErrors = {};

    if (!form.cardHolder.trim()) newErrors.cardHolder = "Can't be blank";
    if (!form.cardNumber.trim()) {
      newErrors.cardNumber = "Can't be blank";
    } else if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(form.cardNumber)) {
      newErrors.cardNumber = "Wrong format, numbers only";
    }
    if (!form.expiryMonth.trim()) newErrors.expiryMonth = "Can't be blank";
    if (!form.expiryYear.trim()) newErrors.expiryYear = "Can't be blank";
    if (!form.cvc.trim()) newErrors.cvc = "Can't be blank";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate("/completed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-10 lg:p-8 flex flex-col gap-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          CARDHOLDER NAME
        </label>
        <Input
          name="cardHolder"
          value={form.cardHolder}
          onChange={handleChange}
          placeholder="e.g. Jane Appleseed"
          autoFocus
        />
        {errors.cardHolder && (
          <p className="text-red-500 text-sm mt-1">{errors.cardHolder}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          CARD NUMBER
        </label>
        <Input
          name="cardNumber"
          value={form.cardNumber}
          onChange={handleChange}
          placeholder="e.g. 1234 5678 9123 0000"
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
        )}
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            EXP. DATE (MM/YY)
          </label>
          <div className="flex gap-2">
            <Input
              name="expiryMonth"
              value={form.expiryMonth}
              onChange={handleChange}
              placeholder="MM"
            />
            <Input
              name="expiryYear"
              value={form.expiryYear}
              onChange={handleChange}
              placeholder="YY"
            />
          </div>
          {(errors.expiryMonth || errors.expiryYear) && (
            <p className="text-red-500 text-sm mt-1">Can't be blank</p>
          )}
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            CVC
          </label>
          <Input
            name="cvc"
            value={form.cvc}
            onChange={handleChange}
            placeholder="e.g. 123"
          />
          {errors.cvc && (
            <p className="text-red-500 text-sm mt-1">{errors.cvc}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-indigo-950 hover:bg-indigo-900 text-white py-3 px-4 rounded-lg mt-4"
      >
        Confirm
      </Button>
    </form>
  );
};
