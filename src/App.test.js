import React from "react";
import {render, screen, useEffect } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders without errors", () => {
  render(<App />)
})

test("dropdown renders with seasons, which will display episodes when clicked.", async () => {
  render(<App />)

  // wait for the show to render
  await screen.findAllByText(/stranger things/i);
  // do the dropdown
  const dropdown = await screen.findByText(/select a season/i);
  userEvent.click(dropdown);
  const season1 = await screen.findByText(/season 1/i);
  userEvent.click(season1);
  // assert that episode 1 is now rendered
  const ep1 = await screen.findAllByText(/chapter one/i);
  expect(ep1[0]).toBeVisible();

})