import { ErrorType } from "../types/error-type";

export const ErrorMessages: Record<ErrorType, string> = {
  USER_NOT_FOUND: "User not found",
  INVALID_CREDENTIALS: "Invalid credentials provided",
  UNAUTHORIZED: "You do not have permission to access this resource",
  INTERNAL_ERROR: "An unexpected error occurred. Please try again later",
};
