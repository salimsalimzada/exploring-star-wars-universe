export const getElapsedTime = (time: string): string => {
  if (!time) return "";
  const pastDate = new Date(time);
  const currentDate = new Date();

  if (isNaN(pastDate.getTime())) return "Invalid date";

  const yearsElapsed = currentDate.getFullYear() - pastDate.getFullYear();

  return `${yearsElapsed} year${yearsElapsed !== 1 ? "s" : ""} ago`;
};
