export class AppError<T> extends Error {
  constructor(
    public message: string,
    public status: number,
    public data?: T,
  ) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

export const getElapsedTime = (time: string) => {
  if (!time) return "";
  const pastDate = new Date(time);
  const currentDate = new Date();
  return `${currentDate.getFullYear() - pastDate.getFullYear()} years ago`;
};

export const extractIdFromUrl = (url: string): string | null => {
  const match = url.match(/\/(\d+)\/?$/);
  return match ? match[1] : null;
};

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
