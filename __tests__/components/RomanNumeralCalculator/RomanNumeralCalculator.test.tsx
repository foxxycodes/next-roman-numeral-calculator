import RomanNumeralCalculator from "@/components/RomanNumeralCalculator/RomanNumeralCalculator";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("RomanNumeralCalculator", () => {
  it("renders an input field", () => {
    render(<RomanNumeralCalculator />);
    const input = screen.getByTestId("int-input");
    expect(input).toBeInTheDocument();
  });

  it("does not show an error message if input is between 1 and 1000", async () => {
    render(<RomanNumeralCalculator />);
    const input = screen.getByTestId<HTMLInputElement>("int-input");

    fireEvent.change(input, { target: { value: "1" } });

    await waitFor(() => {
      const error = screen.queryByTestId("error");
      expect(error).not.toBeInTheDocument();
    });
  });

  it("renders an error message when input is out of bounce", async () => {
    render(<RomanNumeralCalculator />);
    const input = screen.getByTestId<HTMLInputElement>("int-input");

    fireEvent.change(input, { target: { value: "0" } });

    await waitFor(() => {
      const error = screen.getByTestId("error");
      expect(error).toBeInTheDocument();
    });
  });
});
