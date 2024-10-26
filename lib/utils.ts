import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// remove the hash from the keys of an object
export function removeHash(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(removeHash);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = key.replace("#", "");
      acc[newKey] = removeHash(obj[key]);
      return acc;
    }, {} as any);
  }
  return obj;
}
