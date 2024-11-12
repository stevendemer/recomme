import { useEffect, useState } from "react";

interface RangeItem {
  title: string;
  min: number;
  max: number;
}

interface RangeGroup {
  title: string;
  items: RangeItem[];
}

export function paginate<T>(
  results: T[],
  pageSize: number
): Record<number, T[]> {
  const pages: Record<number, T[]> = {};

  const totalPages = Math.floor(results.length / pageSize);
  const remainingItems = results.length % pageSize;

  for (let i = 1; i <= totalPages; ++i) {
    const startIndex = (i - 1) * pageSize;
    pages[i] = results.slice(startIndex, startIndex + pageSize);
  }

  // add remaining items if any
  if (remainingItems > 0) {
    pages[totalPages + 1] = results.slice(totalPages * pageSize);
  }

  return pages;
}

export function paginateRangeGroups(
  ranges: RangeGroup[],
  itemsPerPage: number = 5
) {
  // flatten all items for all groups
  const flattenedItems = ranges.reduce<RangeItem[]>((acc, group) => {
    return acc.concat(
      group.items.map((item) => ({
        ...item,
        groupTitle: group.title,
      }))
    );
  }, []);

  const pages = paginate(flattenedItems, itemsPerPage);

  return {
    pages,
    totalItems: flattenedItems.length,
    totalPages: Object.keys(pages).length,
  };
}

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<Record<number, T[]>>({});

  useEffect(() => {
    setPaginatedData(paginate(items, itemsPerPage));
  }, [items, itemsPerPage]);

  return {
    currentPage,
    setCurrentPage,
    currentItems: paginatedData[currentPage] || [],
    totalPages: Object.keys(paginatedData).length,
    hasNextPage: currentPage < Object.keys(paginatedData).length,
    hasPrevPage: currentPage > 1,
    nextPage: () =>
      setCurrentPage((prev) =>
        Math.min(prev + 1, Object.keys(paginatedData).length)
      ),
    prevPage: () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
  };
}
