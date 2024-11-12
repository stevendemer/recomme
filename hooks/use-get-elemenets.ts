import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { ROUTES } from "@/constants/routes";
import { removeHash } from "@/lib/utils";
import _ from "lodash";
import fallbackData from "@/lib/data.json";

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
export const useGetElements = () => {
  return useQuery({
    queryKey: ["macrointeractions"],
    queryFn: async () => {
      const response = await api.get(ROUTES.getInteractions);

      return await response.data;
    },

    select: (data) => {
      const cleanData = removeHash(data);
      // const flat = _.flatMap(cleanData) as any;
      // const cleanData = data[0];

      // Filter items based on the prefixes of `webform_key`
      const selects = _.filter(cleanData, (item) =>
        _.get(item, "webform_key", "").startsWith("mp_select")
      );
      const cards = _.filter(
        cleanData,
        (item) =>
          _.get(item, "webform_key", "").startsWith("mp_cards") &&
          item.type === "webform_image_select"
      ).map((v) => {
        return {
          images: v["images"],
        };
      });

      const ranges = _.filter(cleanData, (item) =>
        _.get(item, "webform_key", "").startsWith("mp_section")
      ).map((v) => {
        return {
          title: v["title"],
          items: _.filter(v, (subItem) =>
            _.get(subItem, "webform_key", "").startsWith("mp_range")
          ).map((i) => {
            return {
              title: i["title"],
              min: i["min"],
              max: i["max"],
            };
          }),
        };
      });

      return {
        selects,
        cards,
        ranges,
        totalLength: selects.length + cards.length + ranges.length,
        steps: [
          {
            category: "select",
            count: selects.length,
          },
          {
            category: "card",
            count: cards[0].images.length,
          },
          {
            category: "range",
            count: ranges.length,
          },
        ],
      };
    },

    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
