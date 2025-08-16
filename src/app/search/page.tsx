import { defaultSort, sorting } from "@/lib/constants";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = getProducts({ sortKey, reverse, query: searchValue });

  return <p>Search</p>;
}
