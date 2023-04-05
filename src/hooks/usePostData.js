import { useMutation } from "@tanstack/react-query";
import { instance } from "../utils/axios";

export const usePostData = (url) => {
  return useMutation((data) =>
    instance.post(url, data).then((json) => json?.data)
  );
};
