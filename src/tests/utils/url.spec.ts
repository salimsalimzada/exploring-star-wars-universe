import { extractIdFromUrl } from "@utils/url";
import { describe, it } from "vitest";

describe("extractIdFromUrl", () => {
  it("should return the ID from a URL with a trailing slash", ({ expect }) => {
    const url = "https://example.com/starships/123/";
    const result = extractIdFromUrl(url);
    expect(result).toBe("123");
  });

  it("should return the ID from a URL without a trailing slash", ({ expect }) => {
    const url = "https://example.com/people/123";
    const result = extractIdFromUrl(url);
    expect(result).toBe("123");
  });

  it("should return null if the URL does not contain an ID", ({ expect }) => {
    const url = "https://example.com/vehicles/";
    const result = extractIdFromUrl(url);
    expect(result).toBeNull();
  });

  it("should return null if the URL is empty", ({ expect }) => {
    const url = "";
    const result = extractIdFromUrl(url);
    expect(result).toBeNull();
  });
});
