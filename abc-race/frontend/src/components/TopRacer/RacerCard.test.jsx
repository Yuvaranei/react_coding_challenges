import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RacerCard from "./RacerCard";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

const mockRacer = {
  id: "1",
  name: "Racer X",
  country: "JP",
  team: "Lightning",
  image: "https://example.com/racer.jpg",
};

describe("RacerCard", () => {
  test("renders racer details and bookmark button", () => {
    const mockToggle = jest.fn();

    render(
      <I18nextProvider i18n={i18n}>
        <RacerCard
          racer={mockRacer}
          isBookmarked={false}
          toggleBookmark={mockToggle}
        />
      </I18nextProvider>
    );

    expect(screen.getByRole("region", { name: /racer racer x/i })).toBeInTheDocument();
    expect(screen.getByAltText("Racer X")).toBeInTheDocument();
    expect(screen.getByText(/lightning/i)).toBeInTheDocument();
    expect(screen.getByText(/☆ bookmark/i)).toBeInTheDocument();
  });

  test("invokes toggleBookmark when clicked", () => {
    const mockToggle = jest.fn();

    render(
      <I18nextProvider i18n={i18n}>
        <RacerCard
          racer={mockRacer}
          isBookmarked={false}
          toggleBookmark={mockToggle}
        />
      </I18nextProvider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockToggle).toHaveBeenCalledWith(mockRacer.id);
  });

  test("shows bookmarked state", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <RacerCard
          racer={mockRacer}
          isBookmarked={true}
          toggleBookmark={() => {}}
        />
      </I18nextProvider>
    );

    expect(screen.getByText(/★ bookmarked/i)).toBeInTheDocument();
  });
});
