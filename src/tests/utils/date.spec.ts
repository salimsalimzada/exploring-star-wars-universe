import { getElapsedTime } from "@utils/date";
import { describe, it } from "vitest";

describe("getElapsedTime", () => {
  it("returns empty string for empty input", ({ expect }) => {
    expect(getElapsedTime("")).toBe("");
  });

  it('returns "Invalid date" for an invalid date string', ({ expect }) => {
    expect(getElapsedTime("invalid-date")).toBe("Invalid date");
  });
  it('returns "1 year ago" for exactly 1 year difference', ({ expect }) => {
    const currentYear = new Date().getFullYear();
    const result = getElapsedTime(`${currentYear - 1}-04-08`);
    expect(result).toBe("1 year ago");
  });

  it("returns correct years ago for a past date", ({ expect }) => {
    const currentYear = new Date().getFullYear();
    const pastYear = currentYear - 5;
    const result = getElapsedTime(`${pastYear}-04-08`);
    expect(result).toBe("5 years ago");
  });
});
