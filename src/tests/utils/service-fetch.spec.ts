import { AppError } from "@common/AppError";
import { serviceFetch } from "@utils/service-fetch";
import { describe, it, vi, beforeEach, afterEach } from "vitest";

const mockFetch = vi.fn();
global.fetch = mockFetch;

vi.stubEnv("VITE_BASE_URL", "https://swapi.dev/api/");

describe("serviceFetch", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should fetch vehicle data correctly", async ({ expect }) => {
    const mockVehicleData = {
      name: "T-16 skyhopper",
      model: "T-16 skyhopper",
      manufacturer: "Incom Corporation",
      cost_in_credits: "1450",
      length: "10.4 ",
      max_atmosphering_speed: "1200",
      crew: "1",
      passengers: "1",
      cargo_capacity: "50",
      consumables: "0",
      vehicle_class: "repulsorcraft",
      pilots: [],
      films: ["https://swapi.dev/api/films/1/"],
      created: "2014-12-10T16:01:52.434000Z",
      edited: "2014-12-20T21:30:21.665000Z",
      url: "https://swapi.dev/api/vehicles/6/",
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockVehicleData),
    });

    const result = await serviceFetch({
      endpoint: "vehicles/6",
    });

    expect(result).toEqual(mockVehicleData);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith("https://swapi.dev/api/vehicles/6", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  });
  it("should use custom headers when provided", async ({ expect }) => {
    const mockData = { result: "success" };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const customHeaders = {
      "Content-Type": "application/json",
    };

    const result = await serviceFetch({
      endpoint: "vehicles/6",
      headers: customHeaders,
    });

    expect(result).toEqual(mockData);
    expect(mockFetch).toHaveBeenCalledWith("https://swapi.dev/api/vehicles/6", {
      method: "GET",
      headers: customHeaders,
    });
  });

  it("should handle API error responses with error message", async ({ expect }) => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: () => Promise.resolve({ message: "Resource not found" }),
    });

    await expect(
      serviceFetch({
        endpoint: "vehicles/999",
      }),
    ).rejects.toThrow(new AppError("Resource not found", 404, { message: "Resource not found" }));

    expect(mockFetch).toHaveBeenCalledTimes(1);
  });
});
