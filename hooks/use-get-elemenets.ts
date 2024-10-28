import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { ROUTES } from "@/constants/routes";
import { removeHash } from "@/lib/utils";
import _ from "lodash";

/**
 * Fetches elements from the macrointeractions endpoint
 *
 * @param type - Type of element to fetch. Can be "select", "webform_image_select", or "range"
 *
 * @returns The elements of the specified type
 *
 * @example
 * const { data: elements } = useGetElements("select");
 */
export const useGetElements = (type: string) => {
  return useQuery({
    queryKey: ["macrointeractions"],
    queryFn: async () => {
      const response = await api.get(ROUTES.getInteractions);
      return await response.data;
    },

    select: (data) => {
      const cleanData = removeHash(data);

      // types are select - webform_image_select - range
      const items = _.filter(cleanData, (item) => _.get(item, "type") === type);

      console.log("res is ", items);
      return items;
    },

    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
