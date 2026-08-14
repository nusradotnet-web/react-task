import { render, screen } from "@testing-library/react";
import App from "./App";

// Modify src/App.test.js to force a failure
test("renders learn react link", () => {
  expect(1 + 1).toBe(5); // Intentionally failing assertion
});
