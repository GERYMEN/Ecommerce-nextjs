import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import useSWR from "swr";

import ArticlePreview from "./ArticlePreview";
// import ErrorMessage from "../common/ErrorMessage";
// import LoadingSpinner from "../common/LoadingSpinner";
// import div from "../common/div ";
// import Pagination from "../common/Pagination";
import { usePageState } from "../../lib/context/PageContext";
// import {
//   usePageCountState,
//   usePageCountDispatch,
// } from "lib/context/PageCountContext";
import { SERVER_BASE_URL, DEFAULT_LIMIT } from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";

const EmptyMessage = styled("div ")`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
`;

const ArticleList = () => {
  const page = ''
  const pageCount='' ;
  const setPageCount='';
  const lastIndex =
    pageCount > 480 ? Math.ceil(pageCount / 20) : Math.ceil(pageCount / 20) - 1;

  const router = useRouter();
  const { asPath, pathname, query } = router;
  const { favorite, follow, tag, pid } = query;
  const isProfilePage = pathname.startsWith(`/profile`);

  const getFetchURL = () => {
    switch (true) 
    
    {
      case !!tag:
        return `${SERVER_BASE_URL}/articles${asPath}&offset=${page * DEFAULT_LIMIT
          }`;
      case isProfilePage && !!favorite:
        return `${SERVER_BASE_URL}/articles?favorited=${encodeURIComponent(
          String(pid)
        )}&offset=${page * DEFAULT_LIMIT}`;
      case isProfilePage && !favorite:
        return `${SERVER_BASE_URL}/articles?author=${encodeURIComponent(
          String(pid)
        )}&offset=${page * DEFAULT_LIMIT}`;
      case !isProfilePage && !!follow:
        return `${SERVER_BASE_URL}/articles/feed?offset=${page * DEFAULT_LIMIT
          }`;
      default:
        return `${SERVER_BASE_URL}/articles?offset=${page * DEFAULT_LIMIT}`;
    }
  };

  let fetchURL = useMemo(() => getFetchURL(), [
    favorite,
    page,
    tag,
    isProfilePage,
  ]);

  const { data, error } = useSWR(fetchURL, );

  if (error) return <ErrorMessage message="Cannot load recent articles..." />;
  if (!data) return<div >Loading</div >

  console.log(data)
  const { articles, articlesCount } = data;
  // setPageCount(articlesCount);
  // setPageCount=articlesCount

  if (articles?.length === 0) {
    return <EmptyMessage>No articles are here... yet.</EmptyMessage>;
  }else{
  console.log("line no67 in article list in data is",favorite, follow, tag, pid)

  }

  return (
    <>
      {articles?.map((article) => (

        <ArticlePreview key={article.slug} article={article} />
      ))}

      <div test={articlesCount && articlesCount > 20}>
        <div
          total={pageCount}
          limit={20}
          pageCount={10}
          currentPage={page}
          lastIndex={lastIndex}
          fetchURL={fetchURL}
        />
      </div >
    </>
  );
};

export default ArticleList;
