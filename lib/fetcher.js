import useSWR from "swr";
const baseURL = "http://localhost:3000/";
const response = (...args) => fetch(...args).then((res) => res.json());
export default function fetcher(endPoint) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(`${baseURL}${endPoint}`, response);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}