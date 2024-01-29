"use client";

import { ChangeEvent, useState } from "react";

// components
import ErrorAlert from "@/components/errorAlert";

// utils
import RomanNumeralGenerator from "@/utils/romanNumeralGenerator.mjs";

export default function RomanNumeralComponent() {
  const [inputValue, setInputValue] = useState<string>();
  const [error, setError] = useState<string>("");
  const [romanNumeral, setRomanNumeral] = useState<string>("");

  function clearMessages() {
    setRomanNumeral("");
    setError("");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    clearMessages();
  }

  function handleSubmit() {
    if (!inputValue) {
      setError("Please enter a number");
      return;
    }

    try {
      let representation = RomanNumeralGenerator(Number(inputValue));
      setRomanNumeral(representation);
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <div>
      {/* Display validation and other error messages  */}
      {error && <ErrorAlert message={error} />}

      <div className="flex justify-center items-end">
        <div>
          <label
            htmlFor="numberInput"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Enter number to generate it&apos;s Roman numeral
          </label>
          <input
            id="numberInput"
            type="text"
            // value={inputValue}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 ml-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Generate
          </button>
        </div>
      </div>

      {/* Display roman numeral for given number  */}
      {romanNumeral && (
        <div className="mt-4 p-2 bg-green-800 text-white text-center">
          Roman numeral for {inputValue} is :<br />
          <span className="text-4xl">{romanNumeral}</span>
        </div>
      )}
    </div>
  );
}
