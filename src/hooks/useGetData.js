import { instance } from "../utils/axios";
import { useQuery } from "@tanstack/react-query";
export const useGetData = (key, url, option) => {
  return useQuery(key, () => instance.get(url), { ...option });
};
