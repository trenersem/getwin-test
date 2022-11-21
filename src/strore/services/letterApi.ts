import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_BASE_API;

export const letterApi = createApi({
  reducerPath: 'letterApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    sendLetter: builder.mutation<void, FormData>({
      query: (body: FormData) => ({
        url: `${baseUrl}`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
 useSendLetterMutation
} = letterApi;
