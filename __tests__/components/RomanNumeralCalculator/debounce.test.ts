import { debounce } from "@/components/RomanNumeralCalculator/debounce";

describe("debounce", () => {
  it("should call the function with the correct arguments after a delay", () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 100);
    debouncedFn(1, 2, 3);
    // wait for the debounce to finish
    setTimeout(() => {
      expect(fn).toHaveBeenCalledWith(1, 2, 3);
    }, 200);
  });

  it("should not call the function if called again before the delay", () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 100);
    debouncedFn(1, 2, 3);
    debouncedFn(4, 5, 6);
    // wait for the debounce to finish
    setTimeout(() => {
      expect(fn).toHaveBeenCalledWith(4, 5, 6);
    }, 200);
  });
});
