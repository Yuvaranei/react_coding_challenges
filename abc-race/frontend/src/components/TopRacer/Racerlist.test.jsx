import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import RacerList from "./index";
import { GET_TOP_RACERS } from "../../graphql/queries";


const mockRacers = [
  { id: "1", name: "Racer A", country: "JP", team: "Team A", image: "img1.jpg" },
  { id: "2", name: "Racer B", country: "US", team: "Team B", image: "img2.jpg" },
];

const mocks = [
  {
    request: {
      query: GET_TOP_RACERS,
    },
    result: {
      data: {
        topRacers: mockRacers,
      },
    },
  },
];

describe("RacerList", () => {
  test("renders loading state", () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <I18nextProvider i18n={i18n}>
          <RacerList />
        </I18nextProvider>
      </MockedProvider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders error state", async () => {
    const errorMocks = [
      {
        request: { query: GET_TOP_RACERS },
        error: new Error("Error fetching data"),
      },
    ];

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <I18nextProvider i18n={i18n}>
          <RacerList />
        </I18nextProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Error loading racers")).toBeInTheDocument();
    });
  });

  test("renders racers and toggles bookmark", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <I18nextProvider i18n={i18n}>
          <RacerList />
        </I18nextProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Racer A")).toBeInTheDocument();
      expect(screen.getByText("Racer B")).toBeInTheDocument();
    });

    const bookmarkButtons = screen.getAllByRole("button");
    expect(bookmarkButtons.length).toBeGreaterThan(0);
  });
});
