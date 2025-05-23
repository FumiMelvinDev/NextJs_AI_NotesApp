import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const glowColor = "rgba(59, 130, 246, 0.2)";

export const shadow = `0 0 5px ${glowColor}, 0 0 10px ${glowColor}, 0 0 15px ${glowColor}, 0 0 20px ${glowColor}`;

export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    return {
      errorMessage: error.message,
    };
  }
  return { errorMessage: "An unknown error occurred." };
};
