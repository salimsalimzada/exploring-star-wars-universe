import { debounce } from "@utils/debounce";
import { describe, it, vi } from "vitest";

describe("debounce", () => {
  it("delays function execution", ({ expect }) => {
    vi.useFakeTimers();

    const callback = vi.fn();
    const debouncedFn = debounce(callback, 1000);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1000);

    expect(callback).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });

  it("should not call the function if time hasn't passed", ({ expect }) => {
    vi.useFakeTimers();

    const callback = vi.fn();
    const debouncedFn = debounce(callback, 500);

    debouncedFn();

    vi.advanceTimersByTime(300);

    expect(callback).not.toHaveBeenCalled();

    vi.useRealTimers();
  });

  it("calls the function once after the debounce delay", ({ expect }) => {
    vi.useFakeTimers();

    const callback = vi.fn();
    const debouncedFn = debounce(callback, 200);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    vi.advanceTimersByTime(200);

    expect(callback).toHaveBeenCalledTimes(1);

    callback.mockClear();

    debouncedFn();
    debouncedFn();

    vi.advanceTimersByTime(100);

    expect(callback).not.toHaveBeenCalled();

    debouncedFn();

    vi.advanceTimersByTime(100);

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);

    expect(callback).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });
});
