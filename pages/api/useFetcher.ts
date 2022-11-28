import useSWR from "swr";
import { UefaService } from "./uefaservice";

export function useFetcher(reqparams: { [key: string]: string }) {

  const { data, error } = useSWR(reqparams, (reqparams) =>
    UefaService.getUefaData(reqparams)
  );
  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}
