import { IPostResponse } from "@/helpers/Interfaces/ipost.interface.ts";
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import queryString from "query-string";

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
  fetchBaseQuery( {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    baseUrl: import.meta.env.VITE_BACKEND_HOST,
  } );
const postSlice = createApi( {
  reducerPath: "api",
  baseQuery,
  endpoints: ( builder ) => ( {
    getPosts: builder.query<IPostResponse[], { [key: string]: string | number | undefined }>( {
      query: ( params: { id?: number, [ key: string ]: any } ) => {
        const query = queryString.stringify( params );
        return `/posts${ query ? "?" + query : "" }`;
      },
    } as any ),
  } ),
} );
export const postAPIReducer = postSlice.reducer;
export const postAPIPath = postSlice.reducerPath;
export const postAPIMiddleware = postSlice.middleware;
export const { useGetPostsQuery, useLazyGetPostsQuery } = postSlice;
