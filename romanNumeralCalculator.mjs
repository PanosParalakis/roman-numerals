import prompt from "prompt";
import RomanNumeralGenerator from "./utils/romanNumeralGenerator.mjs";

// Start the prompt
prompt.start();

// Function to convert a number into a roman numeral
prompt.get(["Type a number"], function (err, result) {
  try {
    console.log(
      "Roman numeral is: ",
      RomanNumeralGenerator(parseInt(result["Type a number"])),
    );
  } catch (error) {
    console.error(error.message);
  }
});
