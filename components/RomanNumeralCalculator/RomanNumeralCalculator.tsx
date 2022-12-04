import { useState } from "react";
import { debounce } from "./debounce";
import { intToRoman } from "./int-to-roman";
import styles from "./styles.module.css";

const RomanNumeralCalculator: React.FC = () => {
  const [romanNumeral, setRomanNumeral] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // NOTE this function should be debounced, to avoid unnecessary re-renders
    const value = parseInt(event.target.value);

    // check if input value is out of bounce
    if (value < 1 || value > 1000) {
      setError("Please enter a number between 1 and 1000");
      setRomanNumeral("");
      return;
    }

    // convert int to roman numeral
    const romanNumeral = intToRoman(value);
    setRomanNumeral(romanNumeral);
    setError("");
  };

  return (
    <>
      <div className={styles.container}>
        <input
          data-testid="int-input"
          type="number"
          onChange={debounce(handleOnChange, 200)}
        />
        <p> = </p>
        <p>{romanNumeral}</p>
      </div>
      {error && (
        <p data-testid="error" className={styles.error}>
          {error}
        </p>
      )}
    </>
  );
};

export default RomanNumeralCalculator;
