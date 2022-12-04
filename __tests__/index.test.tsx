import Home from "@/pages/index";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Convert an integer to a Roman numeral",
    });

    expect(heading).toBeInTheDocument();
  });
});
