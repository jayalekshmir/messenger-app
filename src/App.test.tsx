import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

window.HTMLElement.prototype.scrollIntoView = () => {};

test("renders app-container div", () => {
  render(<App />);
  const containerElement = screen.getByTestId("app-container");
  expect(containerElement).toBeTruthy();
  console.log(containerElement.innerHTML);
});
