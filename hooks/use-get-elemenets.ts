import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { ROUTES } from "@/constants/routes";
import { removeHash } from "@/lib/utils";

export const useGetElements = (type: string) => {
  return useQuery({
    queryKey: ["macrointeractions"],
    queryFn: async () => {
      const response = await api.get(ROUTES.getInteractions);
      return await response.data;
    },

    select: (data) => {
      const cleanData = removeHash(data);

      const items = Object.entries(cleanData)
        .map(([key, value]: [string, any]) => {
          if (value && value["type"] === type) {
            return { ...value };
          }
        })
        .filter(Boolean);
      console.log("Items are ", items);
      return items;
    },

    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
