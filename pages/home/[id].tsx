import { NextPage } from "next";
import { useRouter } from "next/router";

const SearchResult: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>SearchResult{id}</h1>;
};

export default SearchResult;
