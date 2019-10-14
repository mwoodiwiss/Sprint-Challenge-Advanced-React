import React from "react"
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardsDiv from "./CardsDiv";
afterEach(rtl.cleanup);

test("Player component is rendered with all data", () => {
   const data = { name: "Alex Morgon", country: "United States", searches: 100 };
   const player = rtl.render(<CardsDiv {...data} />);

   player.getByText(data.name);
   player.getByText(`Location: ${data.country}`);
   player.getByText(`Searches: ${data.searches}`);
});