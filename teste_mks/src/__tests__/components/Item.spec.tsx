import React from "react";
import { render, screen } from "@testing-library/react";
import Item from "../../components/Item";

describe("Item Component", () => {
  test("should be render", () => {
    render(<Item />);
  });
});
