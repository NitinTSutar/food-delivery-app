import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact Us Page Test Cases", () => {

  test("should load contact component", () => {
    render(<Contact />);
  
    const heading = screen.getByRole("heading");
  
    // expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe("Contact Us page");
  });

  it("should load button inside  component", () => {
    render(<Contact />);
  
    const inputBoxes = screen.getAllByRole("textbox");
  
    expect(inputBoxes.length).toBe(2); 
  });

  test("should load button inside  component", () => {
    render(<Contact />);
  
    const inputBoxes = screen.getAllByRole("textbox");
  
    expect(inputBoxes.length).toBe(2); 
  });

  test("should load button inside  component", () => {
    render(<Contact />);
  
    const inputBoxes = screen.getAllByRole("textbox");
  
    expect(inputBoxes.length).toBe(2); 
  });
})


