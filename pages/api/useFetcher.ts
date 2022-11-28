import useSWR from "swr";
import { UefaService } from "./uefaservice";

export function useFetcher(reqparams: { [key: string]: string }) {
  console.log(reqparams);
  const { data, error } = useSWR(reqparams, (reqparams) =>
    UefaService.getUefaData(reqparams)
  );
  console.log(data, `/api/user/${JSON.stringify(reqparams)}`);
  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}
