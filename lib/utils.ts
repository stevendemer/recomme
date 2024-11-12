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

export function flattenObject(obj: any) {
  const flattened = {} as { [key: string]: string };

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(flattened, flattenObject(value));
    } else {
      flattened[key] = value;
    }
  });

  return flattened;
}

export function paginate(results: any[], pageSize: number) {
  let pages = {} as any[],
    pageNum = 1,
    i = 0;
  let totalPages = results.length / pageSize;
  let rem = results.length % pageSize;

  while (pageNum <= totalPages) {
    pages[pageNum] = results.slice(i, i + pageSize);
    i += pageSize;
    pageNum++;
  }

  if (rem > 0) {
    pages[pageNum] = results.slice(i);
  }

  return pages;
}
