export const debounce = <T extends unknown[], R>(
  callback: (...args: T) => R,
  delay: number,
): ((...args: T) => void) => {
  let timeoutId: NodeJS.Timeout | undefined;

  return (...args: T): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
